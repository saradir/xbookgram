import { apiFetch } from '@/lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUploadAvatar() {
  const queryClient = useQueryClient();
  const { mutate, isError, isPending } = useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append('avatar', file);
      return apiFetch('/api/users/profile/upload-avatar', {
        method: 'PATCH',
        body: formData,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });

  return { mutate, isError, isPending };
}
