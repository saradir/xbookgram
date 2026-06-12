import { apiFetch } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import type { Notification } from '@xbookgram/shared';

export function useNotification() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notifications'],
    queryFn: () =>
      apiFetch<{ notifications: Notification[] }>('/api/notifications'),
    retry: false,
  });

  return { notifications: data?.notifications, isLoading, isError };
}
