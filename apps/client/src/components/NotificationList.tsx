import { useNotification } from '@/hooks/useNotification';
import { NotificationRow } from './NotificationRow';

export function NotificationList({ className }: { className: string }) {
  const { notifications } = useNotification();

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
      className={`flex flex-col items-center divide-y gap-1 w-96 ${className}`}
    >
      {notifications.map((n) => (
        <NotificationRow key={n.id} notification={n} />
      ))}
    </div>
  );
}
