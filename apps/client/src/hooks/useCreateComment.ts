import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { PostWithComments, Comment } from '@xbookgram/shared';
import { formatDate } from '@/lib/utils';
import { useCurrentUser } from './useCurrentUser';

export function useCreateComment() {
  const queryClient = useQueryClient();
  const { currentUser } = useCurrentUser();
  const createTempComment = (postId: number, content: string): Comment => {
    const date = formatDate(new Date().toISOString());
    return {
      id: 0,
      postId,
      content,
      createdAt: date,
      updatedAt: date,
      isLiked: false,
      _count: { likes: 0 },
      author: currentUser!.user,
    };
  };
  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ postId, content }: { postId: number; content: string }) =>
      apiFetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
      }),

    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ['posts', variables.postId],
      });

      const previousPost = queryClient.getQueryData<{ post: PostWithComments }>(
        ['posts', variables.postId]
      );
      queryClient.setQueryData<{ post: PostWithComments }>(
        ['posts', variables.postId],
        (old) => {
          if (!old) return;
          return {
            ...old,
            post: {
              ...old.post,
              comments: [
                ...old.post.comments,
                createTempComment(variables.postId, variables.content),
              ],
            },
          };
        }
      );

      return previousPost;
    },
    onError: (err, _, context) => {
      console.error(err);
      queryClient.setQueryData(['posts', context?.post.id], context);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  return { mutate, isPending, isError };
}
