import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import socket from '@/lib/socket';
import { useSocketEvents } from '@/hooks/useSocketEvents';

export function ProtectedRoute() {
  const location = useLocation();
  const { currentUser, isLoading } = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      socket.emit('join', currentUser.user.id);
    }
  }, [currentUser]);

  useSocketEvents();

  if (isLoading) return <div>Loading...</div>;
  if (!currentUser) return <Navigate to="/login" replace />;
  if (!currentUser.user.isOnboarded && location.pathname !== '/onboarding')
    return <Navigate to="/onboarding" replace />;
  if (currentUser.user.isOnboarded && location.pathname === '/onboarding')
    return <Navigate to="/" replace />;

  return <Outlet />;
}
