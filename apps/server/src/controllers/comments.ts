import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';

const COMMENTS_PER_PAGE = 20;

export const getComments: RequestHandler = async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const cursor = req.query.cursor ? Number(req.query.cursor) : undefined;
    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }),
      take: COMMENTS_PER_PAGE + 1,
      orderBy: { createdAt: 'asc' },

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
          },
        },
      },
    });

    const hasNextPage = comments.length > COMMENTS_PER_PAGE;
    const trimmed = hasNextPage
      ? comments.slice(0, COMMENTS_PER_PAGE)
      : comments;
    const nextCursor = hasNextPage ? trimmed[COMMENTS_PER_PAGE - 1].id : null;

    return res.status(200).json({
      success: true,
      data: {
        comments: trimmed,
        nextCursor,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createComment: RequestHandler = async (req, res, next) => {
  try {
    const postId = Number(req.params.postId);
    const comment = await prisma.comment.create({
      data: {
        postId,
        authorId: Number(req.userId),
        content: req.body.content,
      },
    });
    return res.status(201).json({
      success: true,
      data: {
        comment,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const editComment: RequestHandler = async (req, res, next) => {
  try {
    const commentId = Number(req.params.commentId);
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment)
      return res
        .status(404)
        .json({ success: false, error: 'Comment not found' });
    if (comment.authorId !== req.userId)
      return res.status(403).json({ success: false, error: 'Unauthorized' });

    const edited = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        content: req.body.content,
      },
    });

    return res.status(200).json({
      success: true,
      data: {
        comment: edited,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteComment: RequestHandler = async (req, res, next) => {
  try {
    const commentId = Number(req.params.commentId);
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment)
      return res
        .status(404)
        .json({ success: false, error: 'Comment not found' });
    if (comment.authorId !== req.userId)
      return res.status(403).json({ success: false, error: 'Unauthorized' });

    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
