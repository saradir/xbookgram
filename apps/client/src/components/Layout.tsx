import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Toaster } from 'sonner';

export function Layout() {
  return (
    <div className="bg-zinc-100 min-h-screen">
      <Navbar />
      <main>
        <Outlet />
        <Toaster />
      </main>
    </div>
  );
}
