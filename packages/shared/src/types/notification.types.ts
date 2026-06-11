import { User } from './user.types.js';

export type Notification = {
  id: number;
  actorId: number;
  recipientId: number;
  isRead: boolean;
  createdAt: string;
  type: 'LIKE' | 'SHARE' | 'FOLLOW' | 'COMMENT';
  actor: User | null;
  postId: number | null;
  commentId: number | null;
};
