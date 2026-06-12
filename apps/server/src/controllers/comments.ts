import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';
import { formatComment } from '../utils/formatComment.js';

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
        likes: {
          where: { userId: req.user!.id },
          select: { userId: true },
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

    const formatted = trimmed.map((comment) => formatComment(comment));
    const nextCursor = hasNextPage ? trimmed[COMMENTS_PER_PAGE - 1].id : null;

    return res.status(200).json({
      success: true,
      data: {
        comments: formatted,
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
        authorId: Number(req.user!.id),
        content: req.body.content,
      },
      include: {
        post: {
          select: {
            authorId: true,
          },
        },
      },
    });

    let notification;
    if (Number(req.user!.id) !== comment.post.authorId) {
      await prisma.notification.create({
        data: {
          actorId: Number(req.user!.id),
          recipientId: Number(comment.post.authorId),
          postId: postId,
          commentId: Number(comment.id),
          type: 'COMMENT',
        },
      });
    }

    return res.status(201).json({
      success: true,
      data: {
        comment: formatComment(comment),
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
    if (comment.authorId !== req.user!.id)
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
        comment: formatComment(edited),
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
    if (comment.authorId !== req.user!.id)
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

export const toggleCommentLike: RequestHandler = async (req, res, next) => {
  try {
    const commentId = Number(req.params.commentId);
    const userId = Number(req.user!.id);
    let result;
    let newLike;
    const like = await prisma.commentLikes.findUnique({
      where: {
        userId_commentId: { userId, commentId },
      },
    });

    if (like) {
      result = 'deleted';
      await prisma.commentLikes.delete({
        where: {
          userId_commentId: { userId, commentId },
        },
      });
    } else {
      result = 'created';
      newLike = await prisma.commentLikes.create({
        data: {
          userId,
          commentId,
        },
        include: {
          comment: {
            select: { authorId: true, postId: true },
          },
        },
      });
    }

    // Create notification
    let notification;
    if (result === 'created' && Number(newLike?.comment.authorId) !== userId) {
      notification = await prisma.notification.create({
        data: {
          actorId: userId,
          recipientId: Number(newLike?.comment.authorId),
          commentId: commentId,
          postId: newLike?.comment.postId,
          type: 'COMMENT_LIKE',
        },
      });
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
