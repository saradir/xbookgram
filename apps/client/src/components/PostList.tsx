import type { Post } from '@xbookgram/shared';
import { PostCard } from './PostCard';
import { useInView } from 'react-intersection-observer';

export function PostList({
  posts,
  hasNextPage,
  fetchNextPage,
}: {
  posts: Post[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
}) {
  const { ref: inViewRef } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView && hasNextPage) fetchNextPage();
    },
  });

  if (posts.length === 0) return <p>No posts to show</p>;

  return (
    <div className="flex flex-col gap-5">
      {posts.map((p) => (
        <PostCard post={p} key={p.id} />
      ))}

      <div className="text-center text-muted-foreground text-sm py-4">
        {hasNextPage ? (
          <p>Scroll down to load more posts...</p>
        ) : (
          <p>End of feed</p>
        )}
      </div>
      <div ref={inViewRef} className="h-px"></div>
    </div>
  );
}
