import { Router } from 'express';
import { createValidator } from '../middlewares/validate.js';
import {
  CommentBodySchema,
  CommentParamSchema,
  CommentQuerySchema,
} from '@xbookgram/shared';
import * as commentController from '../controllers/comments.js';
export const commentRouter = Router({ mergeParams: true });

const bodyValidator = createValidator(CommentBodySchema, 'body');
const paramValidator = createValidator(CommentParamSchema, 'params');
const queryValidator = createValidator(CommentQuerySchema, 'query');

commentRouter.get('/', queryValidator, commentController.getComments);
commentRouter.post('/', bodyValidator, commentController.createComment);
commentRouter.patch(
  '/:commentId',
  paramValidator,
  bodyValidator,
  commentController.editComment
);
commentRouter.delete(
  '/:commentId',
  paramValidator,
  commentController.deleteComment
);
