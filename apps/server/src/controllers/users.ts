import { RequestHandler } from 'express';
import prisma from '../config/prisma.js';

const USERS_PER_PAGE = 25;

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
    const userId = Number(req.params.userId);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        profilePic: true,
        _count: { select: { followers: true, following: true, posts: true } },
        followers: { where: { followingUserId: Number(req.user?.id) } },
        following: { where: { followedUserId: Number(req.user?.id) } },
      },
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

export const searchUsers: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query.q as string;
    const cursor = req.query.cursor ? Number(req.query.cursor) : undefined;

    const users = await prisma.user.findMany({
      where: {
        OR: [
          { username: { contains: query, mode: 'insensitive' } },
          { name: { contains: query, mode: 'insensitive' } },
        ],
      },
      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }),
      take: USERS_PER_PAGE + 1,
      orderBy: { createdAt: 'desc' },
      select: { id: true, username: true, name: true, profilePic: true },
    });

    const hasNextPage = users.length > USERS_PER_PAGE;
    const trimmed = hasNextPage ? users.slice(0, USERS_PER_PAGE) : users;
    const nextCursor = hasNextPage
      ? trimmed[Number(trimmed.length - 1)].id
      : null;

    return res.status(200).json({
      success: true,
      data: { users: trimmed, cursor: nextCursor },
    });
  } catch (error) {
    next(error);
  }
};
