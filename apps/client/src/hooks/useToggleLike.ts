import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Post, Feed, PostWithComments, Comment } from '@xbookgram/shared';
import type { InfiniteData } from '@tanstack/react-query';

export function useToggleLike(
  type: 'comment' | 'post',
  postId: number,
  commentId: number | undefined
) {
  const queryClient = useQueryClient();
  const id = type === 'comment' ? commentId : postId;

  const togglePostLike = (post: Post): Post => ({
    ...post,
    isLiked: !post.isLiked,
    _count: {
      ...post._count,
      likes: post.isLiked ? post._count.likes - 1 : post._count.likes + 1,
    },
  });

  const toggleCommentLike = (comment: Comment): Comment => ({
    ...comment,
    isLiked: !comment.isLiked,
    _count: {
      ...comment._count,
      likes: comment.isLiked
        ? comment._count.likes - 1
        : comment._count.likes + 1,
    },
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () =>
      apiFetch(`/api/${type}s/${id}/toggle-like`, { method: 'POST' }),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });

      const previousPost = queryClient.getQueryData<{ post: Post }>([
        'posts',
        postId,
      ]);
      const previousFeed = queryClient.getQueryData<InfiniteData<Feed>>([
        'posts',
        'feed',
      ]);
      const previousUserPosts = queryClient.getQueryData<InfiniteData<Feed>>([
        'posts',
        'user',
        previousPost?.post.author.id,
      ]);

      queryClient.setQueryData(
        ['posts', postId],
        (old: { post: PostWithComments }) => {
          if (!old) return;
          if (type === 'post') return { post: togglePostLike(old.post) };
          if (type === 'comment')
            return {
              post: {
                ...old.post,
                comments: old.post.comments.map((c) =>
                  c.id === commentId ? toggleCommentLike(c) : c
                ),
              },
            };
        }
      );

      queryClient.setQueryData<InfiniteData<Feed>>(['posts', 'feed'], (old) => {
        if (!old) return;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            posts: page.posts.map((post) =>
              post.id === postId ? togglePostLike(post) : post
            ),
          })),
        };
      });

      queryClient.setQueryData<InfiniteData<Feed>>(
        ['posts', 'user', previousPost?.post.author.id],
        (old) => {
          if (!old) return;
          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              posts: page.posts.map((post) =>
                post.id === postId ? togglePostLike(post) : post
              ),
            })),
          };
        }
      );

      return { previousPost, previousFeed, previousUserPosts };
    },

    onError: (err, _, context) => {
      console.error(err);
      queryClient.setQueryData(['posts', postId], context?.previousPost);
      queryClient.setQueryData<InfiniteData<Feed>>(
        ['posts', 'feed'],
        context?.previousFeed
      );
      queryClient.setQueryData<InfiniteData<Feed>>(
        ['posts', 'user', context?.previousPost?.post.author.id],
        context?.previousUserPosts
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return { mutate, isPending, isError };
}
