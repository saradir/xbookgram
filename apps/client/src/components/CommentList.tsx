import type { Comment } from '@xbookgram/shared';
import { CommentCard } from './CommentCard';

export function CommentList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) return <p>No comments yet.</p>;

  return (
    <div className="flex flex-col gap-2">
      {comments.map((c) => (
        <CommentCard key={c.id} comment={c} />
      ))}
    </div>
  );
}
