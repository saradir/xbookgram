import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import type { CurrentUser } from '@xbookgram/shared';

export function useCurrentUser() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['currentUser'],
    queryFn: () => apiFetch<{ user: CurrentUser }>('/auth/me'),
    retry: false, // don't retry on 401
  });

  return { currentUser: data, isLoading, isError };
}
