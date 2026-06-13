import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Notification } from '@xbookgram/shared';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export function formatNotificationMessage(notification: Notification) {
  const config = {
    POST_LIKE: {
      link: `/posts/${notification.postId}`,
      message: 'liked your post',
    },
    COMMENT_LIKE: {
      link: `/posts/${notification.postId}#${notification.commentId}`,
      message: 'liked your comment',
    },
    SHARE: {
      link: `/posts/${notification.postId}`,
      message: 'shared your post',
    },
    FOLLOW: { link: '', message: 'followed you' },
    COMMENT: {
      link: `/posts/${notification.postId}#${notification.commentId}`,
      message: 'commented on your post',
    },
  };

  const message = config[notification.type];

  return `${notification.actor?.username} ${message.message}`;
}
