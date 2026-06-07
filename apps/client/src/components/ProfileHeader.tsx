import { useCurrentUser } from '@/hooks/useCurrentUser';
import type { UserProfile } from '@xbookgram/shared';
import { Button } from './ui/button';

export function ProfileHeader({ user }: { user: UserProfile }) {
  const { currentUser } = useCurrentUser();
  return (
    <header className="flex gap-2 ">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500">
        {user.username[0].toUpperCase()}
      </div>

      <div className="flex flex-col self-end ">
        <div className="font-bold">{user.username}</div>
        <div className="flex gap-1 items-center">
          <div>
            <span className="font-bold">{user._count.following}</span>{' '}
            <span>following </span>
          </div>
          <span>
            <span className="font-bold">{user._count.followers}</span>{' '}
            <span>followers </span>
          </span>
          <span>
            <span className="font-bold">{user._count.posts}</span>{' '}
            <span>posts </span>
          </span>
          {currentUser?.user.id !== user.id && (
            <Button>{user.isFollowed ? 'Unfollow' : 'Follow'} </Button>
          )}
        </div>
      </div>
    </header>
  );
}
