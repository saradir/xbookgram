import { useNotification } from '@/hooks/useNotification';
import { NotificationRow } from './NotificationRow';
import { useMarkReadNotification } from '@/hooks/useMarkReadNotification';

export function NotificationList({ className }: { className: string }) {
  const { notifications } = useNotification();
  const { mutate: markRead } = useMarkReadNotification();

  const handleClick = (notificationId: number) => {
    markRead(notificationId);
  };

  if (!notifications || notifications.length === 0)
    return (
      <div
        className={`flex flex-col items-center justify-center divide-y gap-1 bg-muted ${className}`}
      >
        No new notifications
      </div>
    );

  return (
    <div
      className={`flex flex-col items-center divide-y gap-1 w-96 max-h-50 overflow-y-scroll  ${className}`}
    >
      {notifications.map((n) => (
        <NotificationRow
          key={n.id}
          notification={n}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
