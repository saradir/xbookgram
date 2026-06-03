import { Card, CardContent, CardHeader } from '@/components/ui/card';

import type { Post } from '@xbookgram/shared';

export function SharedPostPreview({
  post,
}: {
  post: NonNullable<Post['originalPost']>;
}) {
  return (
    <Card>
      <CardHeader>
        <div>{post.author.profilePic || 'here be avatar'}</div>
        <div>{post.author.username}</div>
        <div>
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </CardHeader>
      <CardContent>
        {post.content.slice(0, 150) + (post.content!.length > 150 ? '...' : '')}
      </CardContent>
    </Card>
  );
}
