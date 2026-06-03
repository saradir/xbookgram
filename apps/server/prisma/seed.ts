// apps/server/prisma/seed.ts
import prisma from '../src/config/prisma.js';
import { faker } from '@faker-js/faker';

async function main() {
  console.log('🌱 Seeding...');

  // --- USERS ---
  // use email as the unique identifier
  const users = await Promise.all(
    Array.from({ length: 20 }).map(() => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      return prisma.user.upsert({
        where: { email: faker.internet.email({ firstName, lastName }) },
        update: {},
        create: {
          email: faker.internet.email({ firstName, lastName }),
          username: faker.internet.username({ firstName, lastName }),
          name: `${firstName} ${lastName}`,
          profilePic: faker.image.avatar(),
          isOnboarded: true,
        },
      });
    })
  );
  console.log(`✅ ${users.length} users`);

  // Add my user for testing
  const me = await prisma.user.findUnique({ where: { id: 5 } });
  if (me) users.push(me);

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
  // each user follows ~5 random others (excluding themselves)
  for (const user of users) {
    const targets = faker.helpers
      .arrayElements(users, 5)
      .filter((u) => u.id !== user.id);

    await Promise.all(
      targets.map((target) =>
        prisma.follows.upsert({
          where: {
            followingUserId_followedUserId: {
              followedUserId: target.id,
              followingUserId: user.id,
            },
          },
          update: {},
          create: {
            followingUserId: user.id,
            followedUserId: target.id,
          },
        })
      )
    );
  }
  console.log(`✅ follows`);

  // --- POST LIKES ---
  // each post gets liked by ~3 random users
  for (const post of posts) {
    const likers = faker.helpers.arrayElements(users, 3);

    await Promise.all(
      likers.map((user) =>
        prisma.postLikes.upsert({
          where: { userId_postId: { userId: user.id, postId: post.id } },
          update: {},
          create: { userId: user.id, postId: post.id },
        })
      )
    );
  }
  console.log(`✅ post likes`);

  // --- COMMENTS ---
  // each post gets ~2 comments from random users
  const comments = [];
  for (const post of posts) {
    const commenters = faker.helpers.arrayElements(users, 2);

    for (const user of commenters) {
      const comment = await prisma.comment.create({
        data: {
          content: faker.lorem.sentence(),
          authorId: user.id,
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
        prisma.commentLikes.upsert({
          where: {
            userId_commentId: { userId: user.id, commentId: comment.id },
          },
          update: {},
          create: { userId: user.id, commentId: comment.id },
        })
      )
    );
  }
  console.log(`✅ comment likes`);

  // --- Shares ---
  const shares = await Promise.all(
    users.flatMap((author) =>
      Array.from({ length: 5 }).map(() => {
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

  console.log('🎉 Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
