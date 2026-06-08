import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCreateComment } from '@/hooks/useCreateComment';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { Button } from './ui/button';

export function CreateCommentForm({ postId }: { postId: number }) {
  const { currentUser } = useCurrentUser();
  const { mutate, isPending } = useCreateComment(postId);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;

    mutate(content, {
      onSuccess: () => {
        setContent('');
      },
    });
  };
  return (
    <div className="border rounded-md p-2">
      <form>
        <div className="flex">
          <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500">
            {currentUser?.user.username[0].toUpperCase()}
          </span>
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
