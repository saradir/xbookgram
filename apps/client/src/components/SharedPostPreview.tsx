import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import type { Post } from '@xbookgram/shared';

export function SharedPostPreview({
  post,
}: {
  post: NonNullable<Post['originalPost']>;
}) {
  const navigate = useNavigate();
  return (
    <Card
      className="bg-muted text-sm text-muted-foreground cursor-pointer"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <CardHeader className="flex items-center gap-2">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white ">
          {post.author.username[0].toUpperCase()}
        </div>

        <div
          className="font-bold cursor-pointer hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/users/${post.author.id}`);
          }}
        >
          {post.author.username} <span>wrote:</span>
        </div>

        <div className="ml-auto text-muted-foreground">
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </CardHeader>
      <CardContent className="pl-10 ">
        {post.content.slice(0, 150) + (post.content!.length > 150 ? '...' : '')}
      </CardContent>
    </Card>
  );
}
