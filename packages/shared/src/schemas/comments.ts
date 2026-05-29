import { z } from 'zod';

export const CommentParamSchema = z.object({
  commentId: z.coerce.number(),
});

export const CommentBodySchema = z.object({
  content: z.string().trim().min(1, 'Content cannot be empty'),
});

export const CommentQuerySchema = z.object({
  cursor: z.coerce.number().optional(),
});

export type CommentParams = z.infer<typeof CommentParamSchema>;
export type CommentBody = z.infer<typeof CommentBodySchema>;
export type CommentQuery = z.infer<typeof CommentQuerySchema>;
