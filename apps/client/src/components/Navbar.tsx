import logo from '@/assets/logo_cropped_bg.png';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Bell, Home } from 'lucide-react';
import { CreatePostModal } from './CreatePostModal';

export function Navbar() {
  const { currentUser } = useCurrentUser();
  return (
    <nav className="sticky top-0 z-10 bg-white border-b mb-8 p-2 h-12 flex items-center">
      <img src={logo} alt="logo" className="h-9 w-auto object-contain"></img>

      <div className="flex justify-end ml-auto items-center gap-2">
        <div className="cursor-pointer rounded-md hover:bg-zinc-200">
          <CreatePostModal />
        </div>
        <Link to={'/'} className="rounded-md hover:bg-zinc-200 cursor-pointer">
          <Bell size={28} />
        </Link>
        <Link to={'/'} className="rounded-md hover:bg-zinc-200 cursor-pointer">
          <Home size={28} />
        </Link>
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500">
          <Link to={`/users/${currentUser?.user.id}`}>
            {' '}
            {currentUser?.user.username[0].toUpperCase()}
          </Link>
        </div>
      </div>
    </nav>
  );
}
