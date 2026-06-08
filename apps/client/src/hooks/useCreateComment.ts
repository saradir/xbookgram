import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateComment(postId: number) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (content: string) =>
      apiFetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  return { mutate, isPending, isError };
}
