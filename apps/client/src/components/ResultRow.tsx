import type { UserProfile } from '@xbookgram/shared';
import { ProfilePic } from './ProfilePic';
import { useNavigate } from 'react-router-dom';
import { useToggleFollow } from '@/hooks/useToggleFollow';
import { Button } from './ui/button';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export function ResultRow({ user }: { user: UserProfile }) {
  const navigate = useNavigate();
  const { mutate } = useToggleFollow(user.id);
  const { currentUser } = useCurrentUser();
  return (
    <div
      className="flex gap-2 p-1 m-1 items-center cursor-pointer hover:bg-accent"
      onClick={() => navigate(`/users/${user.id}`)}
    >
      <ProfilePic
        src={user.profilePic}
        username={user.username}
        className="h-6 w-6"
      />
      {user.username}

      {currentUser?.user.id !== user.id && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            mutate();
          }}
          className="cursor-pointer w-24 ml-auto"
        >
          {user.isFollowed ? 'Unfollow' : 'Follow'}{' '}
        </Button>
      )}
    </div>
  );
}
