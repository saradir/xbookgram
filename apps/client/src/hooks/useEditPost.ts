import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useEditPost() {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ postId, content }: { postId: number; content: string }) =>
      apiFetch(`/api/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({ content }),
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  return { mutate, isPending, isError };
}
