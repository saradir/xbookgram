import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCreateComment } from '@/hooks/useCreateComment';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { Button } from './ui/button';
import { ProfilePic } from './ProfilePic';

export function CreateCommentForm({ postId }: { postId: number }) {
  const { currentUser } = useCurrentUser();
  const { mutate, isPending } = useCreateComment();
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;

    mutate(
      { postId, content },
      {
        onSuccess: () => {
          setContent('');
        },
      }
    );
  };
  return (
    <div className="border rounded-md p-2">
      <form>
        <div className="flex">
          <ProfilePic
            src={currentUser?.user.profilePic}
            username={currentUser?.user.username || ''}
          />
          <Textarea
            className="resize-none border-none shadow-none focus-visible:ring-0 mb-2"
            id="content"
            name="content"
            placeholder="Comment here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Textarea>
        </div>
        <div className="flex justify-end">
          <Button type="button" onClick={handleSubmit} disabled={isPending}>
            {' '}
            Send{' '}
          </Button>
        </div>
      </form>
    </div>
  );
}
