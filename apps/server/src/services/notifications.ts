import prisma from '../config/prisma.js';
import { Event } from '@prisma/client';
import { io } from '../server.js';

export async function createNotification(
  recipientId: number,
  actorId: number,
  postId: number | null,
  commentId: number | null,
  type: Event
) {
  try {
    const notification = await prisma.notification.create({
      data: {
        recipientId,
        actorId,
        postId,
        commentId,
        type,
      },
      include: {
        actor: {
          select: { username: true },
        },
      },
    });
    io.to(`user:${recipientId}`).emit('notification', notification);
  } catch (error) {
    console.error(error);
  }
}
