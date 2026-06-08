import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateComment } from '@/hooks/useCreateComment';

export function CreateCommentModal({
  postId,
  open,
  setOpen,
}: {
  postId: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { mutate, isPending } = useCreateComment(postId);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!content.trim()) return;
    mutate(content, {
      onSuccess: () => {
        setOpen(false);
        setContent('');
        navigate(`/posts/${postId}`);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Comment</DialogTitle>
            <DialogDescription>Share your reaction</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Textarea
                id="content"
                rows={5}
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="resize-none  shadow-none focus-visible:ring-0"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="button" disabled={isPending} onClick={handleSubmit}>
              Comment
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
