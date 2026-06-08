import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useSharePost() {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({
      content,
      originalPostId,
    }: {
      content?: string;
      originalPostId: number;
    }) =>
      apiFetch(`/api/posts/${originalPostId}/share`, {
        method: 'POST',
        body: JSON.stringify({ content }),
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  return { mutate, isPending, isError };
}
