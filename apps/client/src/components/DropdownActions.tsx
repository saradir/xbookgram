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

export function ActionsDropdown({ type }: { type: 'post' | 'comment' }) {
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
          {type === 'post' && (
            <DropdownMenuItem className="cursor-pointer">
              <ShareIcon />
              Share
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" className="cursor-pointer">
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
