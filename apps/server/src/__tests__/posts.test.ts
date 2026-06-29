import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { RequestHandler } from 'express';
import request from 'supertest';
import app from '../app.js';

vi.mock('../config/prisma.js', () => ({
  default: {
    post: {
      findUnique: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

vi.mock('../config/passport.js', () => ({}));

vi.mock('../middlewares/auth.js', () => ({
  authenticate: (req: any, res: any, next: any) => {
    req.user = { id: 1, isOnboarded: true };
    next();
  },
  requireOnboarded: (req: any, res: any, next: any) => next(),
}));

import prisma from '../config/prisma.js';

describe('DELETE /api/posts/:postId', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 404 if post not found', async () => {
    vi.mocked(prisma.post.findUnique).mockResolvedValue(null);
    const res = await request(app).delete('/api/posts/1');

    expect(res.status).toBe(404);
  });

  it("returns 403 if post author's id doesn't match current user's id", async () => {
    vi.mocked(prisma.post.findUnique).mockResolvedValue({ authorId: 2 } as any);
    const res = await request(app).delete('/api/posts/1');

    expect(res.status).toBe(403);
  });

  it('deletes post successfully', async () => {
    vi.mocked(prisma.post.findUnique).mockResolvedValue({ authorId: 1 } as any);
    const res = await request(app).delete('/api/posts/1');

    expect(res.status).toBe(200);
    expect(prisma.post.delete).toHaveBeenCalled();
  });
});
