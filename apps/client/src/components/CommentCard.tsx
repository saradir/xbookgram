import { Heart } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import type { Comment } from '@xbookgram/shared';

export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500">
          {comment.author.username[0].toUpperCase()}
        </div>
        <div className="font-bold">{comment.author.username}</div>
      </CardHeader>
      <CardContent className="flex flex-col pl-15 gap-3">
        <div>{comment.content}</div>
      </CardContent>

      <CardFooter className="flex flex-row gap-6 pl-0 py-2">
        <div className="flex flex-row gap-2 pl-10 py-0 w-full">
          <div className="ml-auto text-muted-foreground">
            {new Date(comment.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </div>
          <div className="flex gap-1 items-center text-muted-foreground">
            <div className="cursor-pointer">
              <Heart size={16}></Heart>
            </div>
            {comment._count.likes > 0 && <span>{comment._count.likes}</span>}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
