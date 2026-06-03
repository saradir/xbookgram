import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import type { Post } from '@xbookgram/shared';
import { SharedPostPreview } from './SharedPostPreview';
import { Heart, MessageCircle, Repeat2 } from 'lucide-react';

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
          {post.author.username[0].toUpperCase()}
        </div>
        <div className="font-bold">{post.author.username}</div>
        <div className="ml-auto text-muted-foreground">
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col pl-10 gap-3">
        {post.content && <p>{post.content}</p>}
        {post.originalPost && <SharedPostPreview post={post.originalPost} />}
      </CardContent>

      <CardFooter className="flex gap-6 pl-10 py-2">
        <div className="flex gap-1 items-center text-muted-foreground">
          <Heart size={16} />
          {post._count.likes > 0 && <span>{post._count.likes}</span>}
        </div>
        <div className="flex gap-1  items-center  text-muted-foreground ">
          <MessageCircle size={16} />
          {post._count.likes > 0 && <span>{post._count.comments} </span>}
        </div>
        <div className="flex gap-1  items-center text-muted-foreground ">
          <Repeat2 size={16} />
          {post._count.sharedBy > 0 && <span>{post._count.sharedBy} </span>}
        </div>
      </CardFooter>
    </Card>
  );
}
