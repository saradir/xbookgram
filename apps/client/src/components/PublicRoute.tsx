import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';

export function PublicRoute() {
  const { currentUser, isLoading } = useCurrentUser();

  if (isLoading) return <div>Loading...</div>;
  if (currentUser) return <Navigate to="/" replace />;

  return <Outlet />;
}
