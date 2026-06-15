import { Router } from 'express';
import { createValidator } from '../middlewares/validate.js';
import * as userController from '../controllers/users.js';
import { getPostsByUser } from '../controllers/posts.js';
import {
  UserBodySchema,
  UserParamsSchema,
  UserQuerySchema,
} from '@xbookgram/shared';
import { requireOnboarded } from '../middlewares/auth.js';
import upload from '../config/multer.js';

export const userRouter = Router();

const paramsValidator = createValidator(UserParamsSchema, 'params');
const bodyValidator = createValidator(UserBodySchema, 'body');
const queryValidator = createValidator(UserQuerySchema, 'query');

userRouter.patch('/profile', bodyValidator, userController.editProfile);
userRouter.patch(
  '/profile/upload-avatar',
  upload.single('avatar'),
  userController.uploadAvatar
);
userRouter.get('/search', queryValidator, userController.searchUsers);
userRouter.get('/:userId', paramsValidator, userController.getUser);
userRouter.get('/:userId/posts', paramsValidator, getPostsByUser);
userRouter.post(
  '/:userId/toggle-follow',
  requireOnboarded,
  paramsValidator,
  userController.toggleFollowUser
);
