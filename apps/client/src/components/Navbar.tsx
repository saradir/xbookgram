import logo from '@/assets/logo_cropped_bg.png';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Bell, Home } from 'lucide-react';
import { CreatePostModal } from './CreatePostModal';
import { DropdownMenuAvatar } from './DropdownAvatar';
import { SearchbarLive } from './SearchbarLive';
import { Button } from './ui/button';
//import { useNotification } from '@/hooks/useNotification';
import { useState } from 'react';
import { NotificationList } from './NotificationList';
export function Navbar() {
  const { currentUser } = useCurrentUser();
  //const {notifications} = useNotification();
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  return (
    <nav className="sticky top-0 z-10 bg-white border-b mb-8 p-2 h-12 flex items-center">
      <div className="flex mr-auto items-center gap-1 justify-center">
        <img src={logo} alt="logo" className="h-9 w-auto object-contain"></img>
        <SearchbarLive />
      </div>

      <div className="flex justify-end ml-auto items-center gap-1">
        <CreatePostModal />
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleNotifications}
            onBlur={toggleNotifications}
            className="rounded-md hover:bg-muted cursor-pointer"
          >
            <Bell />
          </Button>
          {showNotifications && (
            <NotificationList className="absolute  top-full right-0 w-80 z-50 bg-background  rounded-md shadow-md" />
          )}
        </div>
        <Button variant="ghost" className="rounded-md  cursor-pointer">
          <Home />
        </Button>
        <DropdownMenuAvatar user={currentUser?.user} />
      </div>
    </nav>
  );
}
