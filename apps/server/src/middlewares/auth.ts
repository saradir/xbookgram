import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.js';

export const authenticate: RequestHandler = async (req, res, next) => {
  let token: string | null = null;
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({ error: 'Not authorized: no token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const user = await prisma.user.findUnique({
      where: {
        id: Number(decoded.userId),
      },
      select: {
        id: true,
        isOnboarded: true,
      },
    });
    if (!user)
      return res.status(401).json({ error: 'Not authorized: token invalid' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Not authorized: token invalid' });
  }
};

export const requireOnboarded: RequestHandler = async (req, res, next) => {
  if (!req.user!.isOnboarded === true) {
    return res.status(400).json({
      success: false,
      error: 'Must complete profile details before performing this task',
    });
  }
  next();
};
