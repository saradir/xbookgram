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

  // --- USERS ---
  const users = await Promise.all(
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
  console.log(`✅ ${users.length} users`);

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

  console.log('🎉 Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
