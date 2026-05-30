import { Router } from 'express';
import { createValidator } from '../middlewares/validate.js';
import * as userController from '../controllers/users.js';
import { UserBodySchema, UserParamsSchema } from '@xbookgram/shared';

export const userRouter = Router();

const paramsValidator = createValidator(UserParamsSchema, 'params');
const bodyValidator = createValidator(UserBodySchema, 'body');

userRouter.patch('/profile', bodyValidator, userController.editProfile);
userRouter.get('/:userId', paramsValidator, userController.getUser);
userRouter.post(
  '/:userId/toggle-follow',
  paramsValidator,
  userController.toggleFollowUser
);
