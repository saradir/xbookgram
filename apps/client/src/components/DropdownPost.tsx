import { MoreHorizontal, PencilIcon, ShareIcon, TrashIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeletePost } from '@/hooks/useDeletePost';

export function DropdownPost({ postId }: { postId: number }) {
  const { mutate: deletePost, isPending: pendingDelete } = useDeletePost();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="focus-visible:ring-0 focus:outline-none cursor-pointer"
      >
        <Button variant="outline" className="border-none">
          <MoreHorizontal size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <PencilIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <ShareIcon />
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            className="cursor-pointer"
            onClick={() => deletePost(postId)}
            disabled={pendingDelete}
          >
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
