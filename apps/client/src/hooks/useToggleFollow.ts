import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UserProfile } from '@xbookgram/shared';

export function useToggleFollow(userId: number) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: () =>
      apiFetch(`/api/users/${userId}/toggle-follow`, { method: 'POST' }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['user', userId] });
      await queryClient.cancelQueries({ queryKey: ['search'] });

      const previousUser = queryClient.getQueryData<{ user: UserProfile }>([
        'user',
        userId,
      ]);
      const previousSearch = queryClient.getQueryData(['search']);

      queryClient.setQueryData<{ user: UserProfile }>(
        ['user', userId],
        (old) => {
          if (!old) return;
          return {
            ...old,
            user: {
              ...old.user,
              isFollowed: !old.user.isFollowed,
            },
            _count: {
              ...old.user._count,
              followers: old.user.isFollowed
                ? old.user._count.followers - 1
                : old.user._count.followers + 1,
            },
          };
        }
      );

      queryClient.setQueryData(['search'], (old: { users: UserProfile[] }) => {
        if (!old) return;
        return {
          ...old,
          users: old.users.map((u) =>
            u.id === userId ? { ...u, isFollowed: !u.isFollowed } : u
          ),
        };
      });

      return { previousUser, previousSearch };
    },

    onError: (err, _, context) => {
      console.error(err);
      queryClient.setQueryData(['user', userId], context?.previousUser);
      queryClient.setQueryData(['search'], context?.previousSearch);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      queryClient.invalidateQueries({ queryKey: ['search'] });
    },
  });

  return { mutate, isPending, isError };
}
