import logo from '@/assets/logo_cropped_bg.png';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Bell, Home } from 'lucide-react';
import { CreatePostModal } from './CreatePostModal';
import { DropdownMenuAvatar } from './DropdownAvatar';
import { SearchbarLive } from './SearchbarLive';
import { Button } from './ui/button';
import { useNotification } from '@/hooks/useNotification';
import { useState, useEffect, useRef } from 'react';
import { NotificationList } from './NotificationList';
import { Badge } from './ui/badge';

export function Navbar() {
  const { currentUser } = useCurrentUser();
  const { notifications } = useNotification();
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  const unreadCount = notifications?.filter((n) => !n.isRead).length ?? 0;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-10 bg-white border-b mb-8 p-2 h-12 flex items-center">
      <div className="flex mr-auto items-center gap-1 justify-center">
        <img src={logo} alt="logo" className="h-9 w-auto object-contain"></img>
        <SearchbarLive />
      </div>

      <div className="flex justify-end ml-auto items-center gap-1">
        <CreatePostModal />
        <div ref={ref} className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleNotifications}
            className="rounded-md hover:bg-muted cursor-pointer"
          >
            <Bell />
          </Button>
          {unreadCount > 0 && (
            <Badge className="absolute -top-0 -right-0 h-4 w-4 p-0 flex items-center justify-center text-xs bg-red-500 text-white dark:bg-red-950 dark:text-red-300 cursor-pointer">
              {unreadCount}
            </Badge>
          )}
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
