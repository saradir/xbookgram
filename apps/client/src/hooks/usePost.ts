import { apiFetch } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import type { PostWithComments } from '@xbookgram/shared';

export function usePost(postId: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => apiFetch<{ post: PostWithComments }>(`/api/posts/${postId}`),
    retry: false,
  });

  return { post: data?.post, isLoading, isError };
}
