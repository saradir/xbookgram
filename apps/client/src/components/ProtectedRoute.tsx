import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useLocation } from 'react-router-dom';

export function ProtectedRoute() {
  const location = useLocation();
  const { currentUser, isLoading } = useCurrentUser();

  if (isLoading) return <div>Loading...</div>;
  if (!currentUser) return <Navigate to="/login" replace />;
  if (!currentUser.user.isOnboarded && location.pathname !== '/onboarding')
    return <Navigate to="/onboarding" replace />;
  if (currentUser.user.isOnboarded && location.pathname === '/onboarding')
    return <Navigate to="/" replace />;

  return <Outlet />;
}
