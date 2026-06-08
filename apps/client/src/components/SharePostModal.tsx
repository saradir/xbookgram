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
import { useSharePost } from '@/hooks/useSharePost';
import { SharedPostPreview } from './SharedPostPreview';
import type { Post } from '@xbookgram/shared';

export function SharePostModal({
  post,
  open,
  setOpen,
}: {
  post: Post;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { mutate, isPending } = useSharePost();
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    mutate(
      { content, originalPostId: post.id },
      {
        onSuccess: () => {
          setOpen(false);
          setContent('');
          navigate('/');
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Share post</DialogTitle>
            <DialogDescription>
              What do you have to say on this post?
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <div className="border rounded-md p-2">
                <Textarea
                  id="content"
                  rows={1}
                  name="content"
                  value={content}
                  placeholder="Any thoughts?"
                  onChange={(e) => setContent(e.target.value)}
                  className="resize-none border-none shadow-none focus-visible:ring-0"
                />
                <SharedPostPreview
                  post={post as NonNullable<Post['originalPost']>}
                />
              </div>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="button" disabled={isPending} onClick={handleSubmit}>
              Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
