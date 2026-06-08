import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { useCreatePost } from '@/hooks/useCreatePost';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreatePostModal() {
  const { mutate, isPending } = useCreatePost();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!content.trim()) return;
    mutate(content, {
      onSuccess: () => {
        setOpen(false);
        setContent('');
        navigate('/');
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>New post</DialogTitle>
            <DialogDescription>What's on your mind?</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Textarea
                id="content"
                rows={15}
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
              Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
