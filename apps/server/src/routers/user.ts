import { Router } from 'express';
import { createValidator } from '../middlewares/validate.js';
import * as userController from '../controllers/users.js';
import {
  UserBodySchema,
  UserParamsSchema,
  UserQuerySchema,
} from '@xbookgram/shared';
import { requireOnboarded } from '../middlewares/auth.js';

export const userRouter = Router();

const paramsValidator = createValidator(UserParamsSchema, 'params');
const bodyValidator = createValidator(UserBodySchema, 'body');
const queryValidator = createValidator(UserQuerySchema, 'query');

userRouter.patch('/profile', bodyValidator, userController.editProfile);
userRouter.get('/search', queryValidator, userController.searchUsers);
userRouter.get('/:userId', paramsValidator, userController.getUser);
userRouter.post(
  '/:userId/toggle-follow',
  requireOnboarded,
  paramsValidator,
  userController.toggleFollowUser
);
