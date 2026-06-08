import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import type { Post } from '@xbookgram/shared';
import { SharedPostPreview } from './SharedPostPreview';
import { Heart, Repeat2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToggleLike } from '@/hooks/useToggleLike';
import { CreateCommentModal } from './CreateCommentModal';
import { useState } from 'react';

export function PostCard({ post }: { post: Post }) {
  const [openModal, setOpen] = useState(false);
  const { mutate } = useToggleLike('post', post.id);

  return (
    <div>
      <CreateCommentModal postId={post.id} setOpen={setOpen} open={openModal} />
      <Card>
        <CardHeader className="flex items-center gap-2">
          <Link
            to={`/users/${post.author.id}`}
            className="flex items-center gap-2"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
              {post.author.username[0].toUpperCase()}
            </div>
            <div className="font-bold">{post.author.username}</div>
          </Link>
          <div className="ml-auto text-muted-foreground">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col pl-10 gap-3">
          <Link to={`/posts/${post.id}`}>
            {post.content && <p>{post.content}</p>}
          </Link>
          {post.originalPost && <SharedPostPreview post={post.originalPost} />}
        </CardContent>
        <CardFooter className="flex gap-2 pl-10 py-2">
          <div
            className="flex gap-1 items-center cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted rounded-md  py-1"
            onClick={() => mutate()}
          >
            <Heart
              size={16}
              className={
                post.isLiked
                  ? 'fill-red-500 text-red-500'
                  : 'text-muted-foreground'
              }
            />
            {post._count.likes > 0 && <span>{post._count.likes}</span>}
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-2 py-1"
            onClick={() => setOpen(true)}
          >
            <MessageCircle size={16} />
            {post._count.comments > 0 && <span>{post._count.comments}</span>}
          </div>
          <div className="flex gap-1 items-center cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-2 py-1 ">
            <Repeat2 size={16} />
            {post._count.sharedBy > 0 && <span>{post._count.sharedBy} </span>}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
