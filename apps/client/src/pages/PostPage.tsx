import { CommentList } from '@/components/CommentList';
import { PostCard } from '@/components/PostCard';
import { usePost } from '@/hooks/usePost';
import { useParams } from 'react-router-dom';

export function PostPage() {
  const postId = Number(useParams().postId);
  const { post, isLoading, isError } = usePost(postId);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  if (!post) return null;

  return (
    <div className="flex flex-col gap-5 max-w-xl mx-auto">
      <PostCard post={post} />
      <div className="border-l-2 border-zinc-300 ml-6 pl-4">
        <CommentList comments={post.comments} />
      </div>
    </div>
  );
}
