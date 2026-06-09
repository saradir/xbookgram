import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({
      commentId,
      content,
    }: {
      commentId: number;
      content: string;
    }) =>
      apiFetch(`/api/posts/comments/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({ content }),
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  return { mutate, isPending, isError };
}
