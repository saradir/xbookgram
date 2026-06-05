import { apiFetch } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import type { UserProfile } from '@xbookgram/shared';

export function useUserProfile(userId: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => apiFetch<{ user: UserProfile }>(`/api/users/${userId}`),
    retry: false,
  });

  return { user: data?.user, isLoading, isError };
}
