import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';

const POSTS_PER_PAGE = 10;

export const getFeed: RequestHandler = async (req, res, next) => {
  try {
    const cursor = req.query.cursor ? Number(req.query.cursor) : undefined;
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          {
            authorId: req.userId,
            updatedAt: { gte: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
          },
          {
            author: { followers: { some: { followingUserId: req.userId } } },
            updatedAt: { gte: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
          },
        ],
      },

      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }),

      take: POSTS_PER_PAGE + 1, // the +1 is used to calculate whether there are more posts/pages
      orderBy: { createdAt: 'desc' },

      include: {
        author: {
          select: {
            id: true,
            username: true,
            profilePic: true,
          },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
          },
        },
      },
    });

    const hasNextPage = posts.length > POSTS_PER_PAGE;
    const trimmed = hasNextPage ? posts.slice(0, POSTS_PER_PAGE) : posts;
    const nextCursor = hasNextPage
      ? trimmed[Number(posts.length - 1)].id
      : null;

    return res.status(200).json({
      success: true,
      trimmed,
      nextCursor,
    });
  } catch (error) {
    next(error);
  }
};
