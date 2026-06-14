import { Router } from 'express';
import * as notificationController from '../controllers/notifications.js';
import { NotificationParamSchema } from '@xbookgram/shared';
import { createValidator } from '../middlewares/validate.js';

export const notificationRouter = Router();
const paramsValidator = createValidator(NotificationParamSchema, 'params');

notificationRouter.get('/', notificationController.getNotifications);
notificationRouter.patch(
  '/:notificationId',
  paramsValidator,
  notificationController.markRead
);
