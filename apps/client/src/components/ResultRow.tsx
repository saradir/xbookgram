import type { User } from '@xbookgram/shared';
import { ProfilePic } from './ProfilePic';
import { useNavigate } from 'react-router-dom';

export function ResultRow({ user }: { user: User }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2 p-1 m-1 items-center cursor-pointer hover:bg-accent"
      onMouseDown={() => navigate(`/users/${user.id}`)}
    >
      <ProfilePic
        src={user.profilePic}
        username={user.username}
        className="h-6 w-6"
      />
      {user.username}
    </div>
  );
}
