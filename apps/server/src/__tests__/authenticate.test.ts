// this tests the "authenticate" middleware

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authenticate } from '../middlewares/auth.js';
import jwt from 'jsonwebtoken';

process.env.JWT_SECRET = 'test-secret';
// Mock prisma
vi.mock('../config/prisma.js', () => ({
  default: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

// Import the mock after vi.mock
import prisma from '../config/prisma.js';

describe('authenticate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 401 if no token provided', async () => {
    const req = { cookies: {}, headers: {} } as any;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any;
    const next = vi.fn();

    await authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it('returns 401 if token is invalid', async () => {
    const token = 'invalidtoken';
    const req = {
      cookies: {},
      headers: { authorization: `Bearer ${token}` },
    } as any;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any;
    const next = vi.fn();

    await authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it('returns 401 if user not found in db', async () => {
    const token = jwt.sign(
      { userId: 32432002, email: 'notexisting@not.not' },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );
    vi.mocked(prisma.user.findUnique).mockResolvedValue(null);
    const req = {
      cookies: {},
      headers: { authorization: `Bearer ${token}` },
    } as any;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any;
    const next = vi.fn();

    await authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it('returns user successfully', async () => {
    const token = jwt.sign(
      { userId: 1, email: 'testuser@test.com' },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    vi.mocked(prisma.user.findUnique).mockResolvedValue({
      id: 1,
      isOnboarded: true,
    } as any);
    const req = {
      cookies: {},
      headers: { authorization: `Bearer ${token}` },
    } as any;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any;
    const next = vi.fn();

    await authenticate(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(req.user).toEqual({ id: 1, isOnboarded: true });
  });
});
