import { z } from 'zod';

export const UserParamsSchema = z.object({
  userId: z.coerce.number(),
});

export type UserParams = z.infer<typeof UserParamsSchema>;
