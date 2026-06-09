import logo from '@/assets/logo_cropped_bg.png';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Bell, Home } from 'lucide-react';
import { CreatePostModal } from './CreatePostModal';
import { DropdownMenuAvatar } from './DropdownAvatar';

export function Navbar() {
  const { currentUser } = useCurrentUser();
  return (
    <nav className="sticky top-0 z-10 bg-white border-b mb-8 p-2 h-12 flex items-center">
      <img src={logo} alt="logo" className="h-9 w-auto object-contain"></img>

      <div className="flex justify-end ml-auto items-center gap-2">
        <CreatePostModal />
        <Link to={'/'} className="rounded-md hover:bg-zinc-200 cursor-pointer">
          <Bell size={28} />
        </Link>
        <Link to={'/'} className="rounded-md hover:bg-zinc-200 cursor-pointer">
          <Home size={28} />
        </Link>
        <DropdownMenuAvatar user={currentUser?.user} />
      </div>
    </nav>
  );
}
