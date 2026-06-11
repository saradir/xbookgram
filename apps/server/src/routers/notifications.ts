import { Router } from 'express';
import * as notificationController from '../controllers/notifications.js';

export const notificationRouter = Router();

notificationRouter.get('/', notificationController.getNotifications);
