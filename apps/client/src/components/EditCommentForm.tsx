import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { Button } from './ui/button';
import { useEditComment } from '@/hooks/useEditComment';

export function EditCommentForm({
  commentId,
  initialContent,
  setIsEditing,
}: {
  commentId: number;
  initialContent: string;
  setIsEditing: (close: boolean) => void;
}) {
  const { mutate, isPending } = useEditComment();
  const [content, setContent] = useState(initialContent);

  const handleSubmit = () => {
    if (!content.trim()) return;

    mutate(
      { commentId, content },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
      }
    );
  };
  return (
    <div className="border bg-muted rounded-md p-2">
      <form>
        <div className="flex">
          <Textarea
            className="resize-none border-none shadow-none focus-visible:ring-0 "
            id="content"
            name="content"
            placeholder="Comment here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoFocus
          ></Textarea>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsEditing(false)}
            disabled={isPending}
          >
            {' '}
            Cancel{' '}
          </Button>
          <Button type="button" onClick={handleSubmit} disabled={isPending}>
            {' '}
            Send{' '}
          </Button>
        </div>
      </form>
    </div>
  );
}
