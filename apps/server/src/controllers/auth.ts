import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';
import jwt from 'jsonwebtoken';
import { success } from 'zod';

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

export const guestLogin: RequestHandler = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: 1 },
    });

    if (!user)
      return res.status(400).json({
        success: false,
        error: 'Guest user not found',
      });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '30d' }
    );
    
    res.redirect(`${process.env.CLIENT_URL}/auth/callback?token=${token}`);  } catch (error) {
    next(error);
  }
};
