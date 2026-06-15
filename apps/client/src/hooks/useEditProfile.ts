import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UserBody } from '@xbookgram/shared';
import { useCurrentUser } from './useCurrentUser';

export function useEditProfile() {
  const { currentUser } = useCurrentUser();
  const queryClient = useQueryClient();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: (body: UserBody) =>
      apiFetch('/api/users/profile', {
        method: 'PATCH',
        body: JSON.stringify(body),
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      queryClient.invalidateQueries({
        queryKey: ['user', currentUser?.user.id],
      });
    },
  });

  return { mutate, isError, isPending };
}
