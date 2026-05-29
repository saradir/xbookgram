import { Router } from 'express';
import * as postController from '../controllers/posts.js';
import { createValidator } from '../middlewares/validate.js';
import {
  PostParamSchema,
  PostBodySchema,
  SharedPostSchema,
} from '@xbookgram/shared';
export const postsRouter = Router();

const paramValidator = createValidator(PostParamSchema, 'params');
const bodyValidator = createValidator(PostBodySchema, 'body');

postsRouter.get('/feed', postController.getFeed);
postsRouter.post('/', bodyValidator, postController.createPost);
postsRouter.get('/:postId', paramValidator, postController.getPost);
postsRouter.patch(
  '/:postId',
  paramValidator,
  bodyValidator,
  postController.editPost
);
postsRouter.delete('/:postId', paramValidator, postController.deletePost);
postsRouter.post(
  '/:postId/share',
  createValidator(SharedPostSchema, 'body'),
  postController.sharePost
);
