import { z } from 'zod';

export const NotificationParamSchema = z.object({
  notificationId: z.coerce.number(),
});

export type NotificationParams = z.infer<typeof NotificationParamSchema>;
