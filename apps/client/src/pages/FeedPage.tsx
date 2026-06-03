import { useFeed } from '@/hooks/useFeed';
import { PostCard } from '@/components/PostCard';
import { useInView } from 'react-intersection-observer';

export function FeedPage() {
  const { feed, isLoading, isError, hasNextPage, fetchNextPage } = useFeed();
  const { ref: inViewRef } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView && hasNextPage) fetchNextPage();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="max-w-xl mx-auto ">
      <div className="flex flex-col gap-5">
        {feed?.pages
          .flatMap((page) => page.posts)
          .map((p) => (
            <PostCard post={p} key={p.id} />
          ))}
      </div>
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
