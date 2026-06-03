import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import type { Post } from '@xbookgram/shared';
import { SharedPostPreview } from './SharedPostPreview';

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader>
        <div>{post.author.profilePic}</div>
        <div>{post.author.username}</div>

        <div>
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </CardHeader>
      <CardContent>
        {post.content && <p>{post.content}</p>}
        {post.originalPost && <SharedPostPreview post={post.originalPost} />}
      </CardContent>

      <CardFooter>
        <div>{post._count.likes} likes</div>
        <div>{post._count.comments} comments</div>
        <div>{post._count.sharedBy} shares</div>
      </CardFooter>
    </Card>
  );
}
