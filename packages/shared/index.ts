import { z } from 'zod';

// A sample schema to validate an Xbookgram user
export const TestUserSchema = z.object({
  username: z.string(),
  isWorking: z.boolean(),
});

// Infer the TypeScript type from the Zod schema
export type TestUser = z.infer<typeof TestUserSchema>;