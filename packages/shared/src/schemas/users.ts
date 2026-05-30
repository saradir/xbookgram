import { z } from 'zod';

const NAME_REGEX = /^[a-zA-Z\s'-]+$/;
const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;
const USERNAME_LENGTH_ERROR = 'Username must have between 4 to 16 characters';
const USERNAME_REGEX_ERROR =
  'Username may only contain alphanumeric characters and _';
const NAME_LENGTH_ERROR =
  'Name must have at least 2 letters and not more than 20';
const NAME_REGEX_ERROR = 'Name may only contain Romanic letters';

export const UserParamsSchema = z.object({
  userId: z.coerce.number(),
});

export const UserBodySchema = z.object({
  username: z
    .string()
    .min(4, USERNAME_LENGTH_ERROR)
    .max(16, USERNAME_LENGTH_ERROR)
    .regex(USERNAME_REGEX, USERNAME_REGEX_ERROR)
    .optional(),
  name: z
    .string()
    .min(2, NAME_LENGTH_ERROR)
    .max(20, NAME_LENGTH_ERROR)
    .regex(NAME_REGEX, NAME_REGEX_ERROR)
    .optional(),
  profilePic: z.url().optional(),
});

export const UserOnboardingSchema = z.object({
  username: z
    .string()
    .min(4, USERNAME_LENGTH_ERROR)
    .max(16, USERNAME_LENGTH_ERROR)
    .regex(USERNAME_REGEX, USERNAME_REGEX_ERROR),
  name: z
    .string()
    .min(2, NAME_LENGTH_ERROR)
    .max(20, NAME_LENGTH_ERROR)
    .regex(NAME_REGEX, NAME_REGEX_ERROR),
});

export type UserParams = z.infer<typeof UserParamsSchema>;
