import { Outlet } from 'react-router-dom';
import { SettingsNav } from '@/components/SettingsNav';

export function SettingsLayout() {
  return (
    <div className="flex">
      <SettingsNav />
      <Outlet />
    </div>
  );
}
