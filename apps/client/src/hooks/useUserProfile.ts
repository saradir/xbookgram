import { apiFetch } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import type { User } from '@xbookgram/shared';

export function useUserProfile(userId: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => apiFetch<User>(`/api/users/${userId}/`),
    retry: false,
  });

  return { user: data, isLoading, isError };
}
