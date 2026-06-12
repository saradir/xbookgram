import type { Notification } from '@xbookgram/shared';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/lib/utils';

export function NotificationRow({
  notification,
}: {
  notification: Notification;
}) {
  const navigate = useNavigate();
  if (!notification) return null;

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
  const { link, message } = config[notification.type] ?? {};

  return (
    <div
      className="flex w-full h-16 items-center gap-2 px-3 cursor-pointer hover:bg-muted rounded-md"
      onClick={() => link && navigate(link)}
    >
      <span
        className="font-semibold hover:underline cursor-pointer shrink-0"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/users/${notification.actorId}`);
        }}
      >
        {notification.actor?.username}
      </span>
      <span className="text-sm text-muted-foreground flex-1">{message}</span>
      <span className="text-xs text-muted-foreground shrink-0 ml-auto">
        {formatDate(notification.createdAt)}
      </span>
    </div>
  );
}
