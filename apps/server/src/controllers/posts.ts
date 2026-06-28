import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';
import { formatPost } from '../utils/formatPost.js';
import { formatComment } from '../utils/formatComment.js';
import { createNotification } from '../services/notifications.js';

const POSTS_PER_PAGE = 10;

export const getFeed: RequestHandler = async (req, res, next) => {
  try {
    const cursor = req.query.cursor ? Number(req.query.cursor) : undefined;
    const posts = await prisma.post.findMany({
      where: {
        OR: [
          {
            authorId: req.user!.id,
            updatedAt: { gte: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
          },
          {
            author: { followers: { some: { followingUserId: req.user!.id } } },
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
        likes: {
          where: { userId: req.user!.id },
          select: { userId: true },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
            sharedBy: true,
          },
        },
        originalPost: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                profilePic: true,
              },
            },
          },
        },
      },
    });

    const hasNextPage = posts.length > POSTS_PER_PAGE;
    const trimmed = hasNextPage ? posts.slice(0, POSTS_PER_PAGE) : posts;
    const formatted = trimmed.map((post) => formatPost(post));
    const nextCursor = hasNextPage
      ? trimmed[Number(trimmed.length - 1)].id
      : null;

    return res.status(200).json({
      success: true,
      data: {
        posts: formatted,
        nextCursor,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getPostsByUser: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const cursor = req.query.cursor ? Number(req.query.cursor) : undefined;
    const posts = await prisma.post.findMany({
      where: { authorId: userId },
      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }),
      take: POSTS_PER_PAGE + 1,
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            profilePic: true,
          },
        },
        likes: {
          where: { userId: req.user!.id },
          select: { userId: true },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
            sharedBy: true,
          },
        },
        originalPost: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                profilePic: true,
              },
            },
          },
        },
      },
    });

    const hasNextPage = posts.length > POSTS_PER_PAGE;
    const trimmed = hasNextPage ? posts.slice(0, POSTS_PER_PAGE) : posts;
    const formatted = trimmed.map((post) => formatPost(post));
    const nextCursor = hasNextPage
      ? trimmed[Number(trimmed.length - 1)].id
      : null;

    return res.status(200).json({
      success: true,
      data: {
        posts: formatted,
        nextCursor,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getPost: RequestHandler = async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            profilePic: true,
          },
        },
        comments: {
          select: {
            id: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            _count: {
              select: {
                likes: true,
              },
            },
            author: {
              select: {
                id: true,
                username: true,
                profilePic: true,
              },
            },
            likes: {
              where: { userId: req.user!.id },
              select: { userId: true },
            },
          },
          orderBy: { createdAt: 'asc' },
        },
        likes: {
          where: { userId: req.user!.id },
          select: { userId: true },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
            sharedBy: true,
          },
        },
        originalPost: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                profilePic: true,
              },
            },
          },
        },
      },
    });

    if (!post)
      return res.status(404).json({ success: false, error: 'Post not found' });

    const formattedComments = post.comments.map((comment) =>
      formatComment(comment)
    );
    return res.status(200).json({
      success: true,
      data: {
        post: { ...formatPost(post), comments: formattedComments },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createPost: RequestHandler = async (req, res, next) => {
  try {
    const post = await prisma.post.create({
      data: {
        content: req.body.content,
        authorId: Number(req.user!.id),
      },
    });

    return res.status(201).json({
      success: true,
      data: {
        post: formatPost(post),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const editPost: RequestHandler = async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post)
      return res.status(404).json({ success: false, error: 'Post not found' });
    if (post.authorId !== req.user!.id)
      return res.status(403).json({ success: false, error: 'Unauthorized' });

    const edited = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        content: req.body.content,
      },
    });
    return res.status(200).json({
      success: true,
      data: { post: formatPost(edited) },
    });
  } catch (error) {
    next(error);
  }
};

export const deletePost: RequestHandler = async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post)
      return res.status(404).json({ success: false, error: 'Post not found' });
    if (post.authorId !== req.user!.id)
      return res.status(403).json({ success: false, error: 'Unauthorized' });

    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const sharePost: RequestHandler = async (req, res, next) => {
  try {
    const originalPostId = Number(req.params.postId);
    const userId = Number(req.user!.id);
    const originalPost = await prisma.post.findUnique({
      where: {
        id: originalPostId,
      },
    });

    if (!originalPost)
      return res.status(404).json({ success: false, error: 'Post not found' });

    const shared = await prisma.post.create({
      data: {
        content: req.body.content,
        authorId: userId,
        originalPostId,
      },
    });

    // Create notification
    if (Number(originalPost.authorId) !== userId) {
      createNotification(
        Number(originalPost.authorId),
        userId,
        shared.id,
        null,
        'SHARE'
      );
    }

    return res.status(201).json({
      success: true,
      data: {
        post: formatPost(shared),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const togglePostLike: RequestHandler = async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const userId = Number(req.user!.id);
    let result;
    const like = await prisma.postLikes.findUnique({
      where: {
        userId_postId: { userId, postId },
      },
    });

    let newLike;

    if (like) {
      result = 'deleted';
      await prisma.postLikes.delete({
        where: {
          userId_postId: { userId, postId },
        },
      });
    } else {
      result = 'created';
      newLike = await prisma.postLikes.create({
        data: {
          userId,
          postId,
        },
        include: {
          post: {
            select: {
              authorId: true,
            },
          },
        },
      });
    }

    // Create notification
    if (result === 'created' && Number(newLike?.post.authorId) !== userId) {
      createNotification(
        Number(newLike?.post.authorId),
        userId,
        postId,
        null,
        'POST_LIKE'
      );
    }

    return res.status(200).json({
      success: true,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
