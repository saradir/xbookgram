import { apiFetch } from '@/lib/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { Feed } from '@xbookgram/shared';

export function useFeed() {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['posts', 'feed'],
      queryFn: ({ pageParam }) =>
        apiFetch<Feed>(
          '/api/posts/feed' + (pageParam ? `?cursor=${pageParam}` : '')
        ),
      getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
      initialPageParam: undefined as number | undefined,
      retry: false,
    });

  return { feed: data, isLoading, isError, hasNextPage, fetchNextPage };
}
