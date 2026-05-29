import { z } from 'zod';

export const PostParamSchema = z.object({
  postId: z.coerce.number(),
});

export const PostQuerySchema = z.object({
  cursor: z.coerce.number().optional(),
});

export const PostBodySchema = z.object({
  content: z.string().trim().min(1, 'Content cannot be empty'),
});

export const SharedPostSchema = PostBodySchema.partial();

export type PostParams = z.infer<typeof PostParamSchema>;
export type PostBody = z.infer<typeof PostBodySchema>;
export type SharedPostBody = z.infer<typeof SharedPostSchema>;
