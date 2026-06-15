import { useEditProfile } from '@/hooks/useEditProfile';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserBodySchema } from '@xbookgram/shared';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export function UserInfoForm() {
  const { currentUser } = useCurrentUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserBodySchema),
    defaultValues: { username: currentUser?.user.username },
  });

  const { mutate } = useEditProfile();
  return (
    <form
      onSubmit={handleSubmit((data) => mutate({ username: data.username }))}
    >
      <label htmlFor="username">Username: </label>
      <input
        {...register('username')}
        type="text"
        id="username"
        name="username"
      ></input>
      {errors.username && <p>{errors.username.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
