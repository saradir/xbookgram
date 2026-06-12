import { useCurrentUser } from '@/hooks/useCurrentUser';
import type { UserProfile } from '@xbookgram/shared';
import { Button } from './ui/button';
import { useToggleFollow } from '@/hooks/useToggleFollow';
import { ProfilePic } from './ProfilePic';

export function ProfileHeader({ user }: { user: UserProfile }) {
  const { currentUser } = useCurrentUser();
  const { mutate } = useToggleFollow(user.id);

  return (
    <header className="flex gap-2 ">
      <ProfilePic
        src={user.profilePic}
        username={user.username || ''}
        className="h-16 w-16"
      />
      <div className="flex flex-col self-end ">
        <div className="font-bold">{user.username}</div>
        <div className="flex gap-2 items-center p-2">
          <div>
            <span className="font-bold tabular-nums">
              {user._count.following}
            </span>{' '}
            <span>following </span>
          </div>
          <span>
            <span className="font-bold tabular-nums">
              {user._count.followers}
            </span>{' '}
            <span>followers </span>
          </span>
          <span>
            <span className="font-bold tabular-nums">{user._count.posts}</span>{' '}
            <span>posts </span>
          </span>
          {currentUser?.user.id !== user.id && (
            <Button onClick={() => mutate()} className="cursor-pointer w-24">
              {user.isFollowed ? 'Unfollow' : 'Follow'}{' '}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
