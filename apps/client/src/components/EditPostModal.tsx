import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useEditPost } from '@/hooks/useEditPost';

export function EditPostModal({
  postId,
  initialContent,
  isShare,
  open,
  setOpen,
}: {
  postId: number;
  initialContent: string | null;
  isShare: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { mutate, isPending } = useEditPost();
  const [content, setContent] = useState(initialContent);
  const handleSubmit = () => {
    if (!isShare && !content?.trim()) return;
    mutate(
      { postId, content },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit post</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Textarea
                id="content"
                rows={15}
                name="content"
                value={content || ''}
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
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
