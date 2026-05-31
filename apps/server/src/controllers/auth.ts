import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';

export const getCurrentUser: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user!.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        name: true,
        isOnboarded: true,
        profilePic: true,
        email: true,
      },
    });

    if (!user)
      return res
        .status(400)
        .json({ success: false, error: 'Failed to retreive user' });
    return res.status(200).json({ success: 'true', data: { user } });
  } catch (error) {
    next(error);
  }
};
