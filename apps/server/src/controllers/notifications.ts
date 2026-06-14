import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';
import { success } from 'zod';

export const getNotifications: RequestHandler = async (req, res, next) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: {
        recipientId: Number(req.user!.id),
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      },
      include: {
        actor: {
          select: { id: true, username: true, profilePic: true },
        },
      },
      take: 50,
      orderBy: { createdAt: 'desc' },
    });

    return res.status(200).json({
      success: true,
      data: { notifications },
    });
  } catch (error) {
    next(error);
  }
};

export const markRead: RequestHandler = async (req, res, next) => {
  try {
    const notificationId = Number(req.params.notificationId);
    const notification = await prisma.notification.update({
      where: {
        recipientId: Number(req.user!.id),
        id: notificationId,
      },
      data: {
        isRead: true,
      },
    });

    if (notification) {
      return res.status(200).json({
        success: true,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Invalid request',
      });
    }
  } catch (error) {
    next(error);
  }
};
