import { apiFetch } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import type { User } from '@xbookgram/shared';

export function useSearch(query: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', query],
    queryFn: () => apiFetch<{ users: User[] }>(`/api/users/search?q=${query}`),
    enabled: !!query && query.length > 2,
    retry: false,
  });

  return { users: data?.users, isLoading, isError };
}
