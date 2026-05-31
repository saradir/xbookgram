import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export function ProtectedRoute() {
  const { currentUser, isLoading } = useCurrentUser();

  if (isLoading) return <div>Loading...</div>;
  if (!currentUser) return <Navigate to="/login" replace />;
  if (!currentUser.user.isOnboarded)
    return <Navigate to="/onboarding" replace />;

  return <Outlet />;
}
