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
import { SharePostModal } from './SharePostModal';
import { ActionsDropdown } from './DropdownActions';
import { ProfilePic } from './ProfilePic';

export function PostCard({ post }: { post: Post }) {
  const [openCommentModal, setCommentModalOpen] = useState(false);
  const [openShareModal, setShareModalOpen] = useState(false);
  const { mutate } = useToggleLike('post', post.id);

  return (
    <div>
      <CreateCommentModal
        postId={post.id}
        setOpen={setCommentModalOpen}
        open={openCommentModal}
      />
      <SharePostModal
        post={post}
        setOpen={setShareModalOpen}
        open={openShareModal}
      />
      <Card>
        <CardHeader className="flex items-center gap-2">
          <Link
            to={`/users/${post.author.id}`}
            className="flex items-center gap-2"
          >
            <ProfilePic
              src={post.author?.profilePic}
              username={post.author?.username || ''}
            />
            <div className="font-bold">{post.author.username}</div>
          </Link>
          <div className=" text-muted-foreground">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </div>
          <CardAction className="ml-auto">
            <ActionsDropdown type="post" />
          </CardAction>
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
            onClick={() => setCommentModalOpen(true)}
          >
            <MessageCircle size={16} />
            {post._count.comments > 0 && <span>{post._count.comments}</span>}
          </div>
          {!post.originalPost && (
            <div
              className="flex gap-1 items-center cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-2 py-1 "
              onClick={() => setShareModalOpen(true)}
            >
              <Repeat2 size={16} />
              {post._count.sharedBy > 0 && <span>{post._count.sharedBy} </span>}
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
