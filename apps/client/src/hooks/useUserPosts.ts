import { apiFetch } from '@/lib/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { Feed } from '@xbookgram/shared';

export function useUserPosts(userId: number) {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['posts', 'user', userId],
      queryFn: ({ pageParam }) =>
        apiFetch<Feed>(
          `/api/users/${userId}/posts` +
            (pageParam ? `?cursor=${pageParam}` : '')
        ),
      getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
      initialPageParam: undefined as number | undefined,
      retry: false,
    });

  return { feed: data, isLoading, isError, hasNextPage, fetchNextPage };
}
