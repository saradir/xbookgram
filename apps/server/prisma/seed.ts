// apps/server/prisma/seed.ts
import prisma from '../src/config/prisma.js';
import { faker } from '@faker-js/faker';

async function main() {
  console.log('🌱 Seeding...');

  // Clear in reverse dependency order so re-runs are safe
  await prisma.notification.deleteMany();
  await prisma.commentLikes.deleteMany();
  await prisma.postLikes.deleteMany();
  await prisma.follows.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  console.log('🧹 Cleared existing data');

  // --- GUEST USER ---
  const guest = await prisma.user.create({
    data: {
      email: 'guest@example.com',
      username: 'guest',
      name: 'Guest User',
      profilePic: faker.image.avatar(),
      isOnboarded: true,
    },
  });
  console.log('✅ guest user  (email: guest@example.com, username: guest)');

  // --- RANDOM USERS ---
  const randomUsers = await Promise.all(
    Array.from({ length: 20 }, (_, i) => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email({ firstName, lastName });
      // Append index to guarantee unique usernames across this run
      const username = `${faker.internet.username({ firstName, lastName })}_${i}`;

      return prisma.user.create({
        data: {
          email,
          username,
          name: `${firstName} ${lastName}`,
          profilePic: faker.image.avatar(),
          isOnboarded: true,
        },
      });
    })
  );
  console.log(`✅ ${randomUsers.length} random users`);

  // Guest participates in everything as a normal user
  const users = [guest, ...randomUsers];

  // --- POSTS ---
  const posts = await Promise.all(
    users.flatMap((author) =>
      Array.from({ length: 5 }).map(() =>
        prisma.post.create({
          data: {
            content: faker.lorem.paragraph(),
            authorId: author.id,
          },
        })
      )
    )
  );
  console.log(`✅ ${posts.length} posts`);

  // --- FOLLOWS ---
  // Each user follows up to 5 unique others (arrayElements returns distinct items)
  for (const user of users) {
    const others = users.filter((u) => u.id !== user.id);
    const targets = faker.helpers.arrayElements(others, Math.min(5, others.length));

    await Promise.all(
      targets.map((target) =>
        prisma.follows.create({
          data: {
            followingUserId: user.id,
            followedUserId: target.id,
          },
        })
      )
    );
  }
  console.log('✅ follows');

  // --- POST LIKES ---
  // Each post gets liked by up to 3 unique random users
  for (const post of posts) {
    const likers = faker.helpers.arrayElements(users, Math.min(3, users.length));

    await Promise.all(
      likers.map((user) =>
        prisma.postLikes.create({
          data: { userId: user.id, postId: post.id },
        })
      )
    );
  }
  console.log('✅ post likes');

  // --- COMMENTS ---
  const comments = [];
  for (const post of posts) {
    const commenters = faker.helpers.arrayElements(users, 2);

    for (const commenter of commenters) {
      const comment = await prisma.comment.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: commenter.id,
          postId: post.id,
        },
      });
      comments.push(comment);
    }
  }
  console.log(`✅ ${comments.length} comments`);

  // --- COMMENT LIKES ---
  for (const comment of comments) {
    const likers = faker.helpers.arrayElements(users, 2);

    await Promise.all(
      likers.map((user) =>
        prisma.commentLikes.create({
          data: { userId: user.id, commentId: comment.id },
        })
      )
    );
  }
  console.log('✅ comment likes');

  // --- SHARES ---
  const shares = await Promise.all(
    users.flatMap((author) =>
      Array.from({ length: 3 }).map(() => {
        const originalPost = faker.helpers.arrayElement(posts);
        return prisma.post.create({
          data: {
            content: faker.lorem.paragraph(),
            authorId: author.id,
            originalPostId: originalPost.id,
          },
        });
      })
    )
  );
  console.log(`✅ ${shares.length} shared posts`);

  // ============================================================
  // --- GUEST SHOWCASE ---
  // Make sure the guest profile is fully populated with rich data
  // ============================================================

  const guestPosts = posts.filter((p) => p.authorId === guest.id);
  const otherPosts = posts.filter((p) => p.authorId !== guest.id);

  // All random users follow guest (rich followers list)
  await Promise.all(
    randomUsers.map((u) =>
      prisma.follows.upsert({
        where: {
          followingUserId_followedUserId: {
            followingUserId: u.id,
            followedUserId: guest.id,
          },
        },
        update: {},
        create: { followingUserId: u.id, followedUserId: guest.id },
      })
    )
  );

  // Guest follows all random users (rich feed)
  await Promise.all(
    randomUsers.map((u) =>
      prisma.follows.upsert({
        where: {
          followingUserId_followedUserId: {
            followingUserId: guest.id,
            followedUserId: u.id,
          },
        },
        update: {},
        create: { followingUserId: guest.id, followedUserId: u.id },
      })
    )
  );
  console.log('✅ guest follows / followers');

  // All random users like every guest post
  for (const post of guestPosts) {
    await Promise.all(
      randomUsers.map((u) =>
        prisma.postLikes.upsert({
          where: { userId_postId: { userId: u.id, postId: post.id } },
          update: {},
          create: { userId: u.id, postId: post.id },
        })
      )
    );
  }
  console.log('✅ guest post likes');

  // Each guest post gets 5 additional comments
  const guestPostComments = [];
  for (const post of guestPosts) {
    const commenters = faker.helpers.arrayElements(randomUsers, 5);
    for (const commenter of commenters) {
      const comment = await prisma.comment.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: commenter.id,
          postId: post.id,
        },
      });
      guestPostComments.push(comment);
    }
  }

  // Like those comments too
  for (const comment of guestPostComments) {
    const likers = faker.helpers.arrayElements(randomUsers, 3);
    await Promise.all(
      likers.map((u) =>
        prisma.commentLikes.upsert({
          where: { userId_commentId: { userId: u.id, commentId: comment.id } },
          update: {},
          create: { userId: u.id, commentId: comment.id },
        })
      )
    );
  }
  console.log('✅ guest post comments & comment likes');

  // Guest likes 10 random posts from others
  const postsToLike = faker.helpers.arrayElements(otherPosts, Math.min(10, otherPosts.length));
  await Promise.all(
    postsToLike.map((post) =>
      prisma.postLikes.upsert({
        where: { userId_postId: { userId: guest.id, postId: post.id } },
        update: {},
        create: { userId: guest.id, postId: post.id },
      })
    )
  );
  console.log('✅ guest liked others\' posts');

  // Guest comments on 5 random posts from others
  const postsToComment = faker.helpers.arrayElements(otherPosts, Math.min(5, otherPosts.length));
  for (const post of postsToComment) {
    await prisma.comment.create({
      data: {
        content: faker.lorem.sentence(),
        authorId: guest.id,
        postId: post.id,
      },
    });
  }
  console.log('✅ guest commented on others\' posts');

  // Guest shares 3 posts from others
  const postsToShare = faker.helpers.arrayElements(otherPosts, Math.min(3, otherPosts.length));
  await Promise.all(
    postsToShare.map((post) =>
      prisma.post.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: guest.id,
          originalPostId: post.id,
        },
      })
    )
  );
  console.log('✅ guest shared posts');

  console.log('🎉 Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
