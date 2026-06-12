import { apiFetch } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import type { UserProfile } from '@xbookgram/shared';

export function useSearch(query: string) {
  const { data, isPending, isError } = useQuery({
    queryKey: ['search', query],
    queryFn: () =>
      apiFetch<{ users: UserProfile[] }>(`/api/users/search?q=${query}`),
    enabled: !!query && query.length > 2,
    retry: false,
  });

  return { users: data?.users, isPending, isError };
}
