import { Heart } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardAction,
} from './ui/card';
import type { Comment } from '@xbookgram/shared';
import { useToggleLike } from '@/hooks/useToggleLike';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { ProfilePic } from './ProfilePic';
import { Link } from 'react-router-dom';
import { DropdownComment } from './DropdownComment';

export function CommentCard({ comment }: { comment: Comment }) {
  const { mutate } = useToggleLike('comment', comment.id);
  const { currentUser } = useCurrentUser();
  const isCurrentUser = comment.author.id === currentUser?.user.id;

  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <Link
          to={`/users/${comment.author.id}`}
          className="flex items-center gap-2"
        >
          <ProfilePic
            src={comment.author.profilePic}
            username={comment.author.username}
          />
          <div className="font-bold">{comment.author.username}</div>
        </Link>
        <div className=" text-muted-foreground">
          {new Date(comment.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </div>
        <CardAction className="ml-auto">
          {isCurrentUser && <DropdownComment commentId={comment.id} />}
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col pl-15 gap-3">
        <div>{comment.content}</div>
      </CardContent>

      <CardFooter className="flex flex-row gap-6 pl-0 py-2">
        <div className="flex flex-row gap-2 pl-10 py-0 w-full">
          <div className="flex gap-1 items-center text-muted-foreground">
            <div className="cursor-pointer" onClick={() => mutate()}>
              <Heart
                size={16}
                className={
                  comment.isLiked
                    ? 'fill-red-500 text-red-500'
                    : 'text-muted-foreground'
                }
              />
            </div>
            {comment._count.likes > 0 && <span>{comment._count.likes}</span>}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
