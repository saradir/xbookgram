import { useFeed } from '@/hooks/useFeed';
import { PostList } from '@/components/PostList';

export function FeedPage() {
  const { feed, isLoading, isError, hasNextPage, fetchNextPage } = useFeed();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  const posts = feed?.pages.flatMap((page) => page.posts) || [];

  return (
    <div className="max-w-xl mx-auto ">
      <PostList
        posts={posts}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </div>
  );
}
