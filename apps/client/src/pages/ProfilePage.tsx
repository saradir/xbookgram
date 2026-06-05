import { useUserProfile } from '@/hooks/useUserProfile';
import { ProfileHeader } from '@/components/ProfileHeader';
import { useUserPosts } from '@/hooks/useUserPosts';
import { useParams } from 'react-router-dom';
import { PostList } from '@/components/PostList';
import { ProfileBody } from '@/components/ProfileBody';

export function ProfilePage() {
  const userId = Number(useParams().userId);

  const {
    user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUserProfile(userId);
  const {
    posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
    hasNextPage,
    fetchNextPage,
  } = useUserPosts(userId);

  if (isUserLoading || isPostsLoading) return <div>Loading...</div>;
  if (isUserError || isPostsError) return <div>Something went wrong...</div>;
  if (!user || !posts) return null;

  const flattened = posts?.pages.flatMap((page) => page.posts) || [];
  return (
    <div className="flex flex-col gap-8">
      <ProfileHeader user={user} />

      <ProfileBody>
        <PostList
          posts={flattened}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </ProfileBody>
    </div>
  );
}
