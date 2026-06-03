import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="bg-zinc-100">
      <nav>Navbar placeholder</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
