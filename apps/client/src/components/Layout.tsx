import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <nav>Navbar placeholder</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
