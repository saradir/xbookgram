import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="bg-zinc-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
