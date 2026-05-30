import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';

export const toggleFollowUser: RequestHandler = async (req, res, next) => {
  try {
    const followedId = Number(req.params.userId);
    const userId = Number(req.user!.id);
    let result;

    if (followedId === userId)
      return res
        .status(400)
        .json({ success: false, error: "Can't follow yourself" });

    // confirm user exists
    const followedUser = await prisma.user.findUnique({
      where: {
        id: followedId,
      },
    });

    if (!followedUser)
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });

    const follow = await prisma.follows.findUnique({
      where: {
        followingUserId_followedUserId: {
          followingUserId: userId,
          followedUserId: followedId,
        },
      },
    });

    if (!follow) {
      result = 'followed';
      await prisma.follows.create({
        data: {
          followingUserId: userId,
          followedUserId: followedId,
        },
      });
    } else {
      result = 'unfollowed';
      await prisma.follows.delete({
        where: {
          followingUserId_followedUserId: {
            followingUserId: userId,
            followedUserId: followedId,
          },
        },
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const editProfile: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user!.id;
    const { username, name, profilePic } = req.body;

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
        name,
        profilePic,
      },
      select: {
        username: true,
        name: true,
        profilePic: true,
        isOnboarded: true,
      },
    });

    res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, profilePic: true },
    });

    if (!user)
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    return res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

// Complete user onboarding
export const onboardUser: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.user!.id;
    const { username, name } = req.body;

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        name,
        isOnboarded: true,
      },
      select: { id: true, username: true, profilePic: true, isOnboarded: true },
    });
    return res.status(200).json({ success: true, data: { user } });
  } catch (error) {
    next(error);
  }
};
