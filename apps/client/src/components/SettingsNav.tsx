import { UserRound, Lock, Settings2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function SettingsNav() {
  const navigate = useNavigate();
  const SELECTED_STYLE = 'font-medium border-l-2 border-primary bg-muted';
  const UNSELECTED_STYLE =
    'text-muted-foreground border-l-2 border-transparent hover:bg-muted hover:text-foreground';

  const location = useLocation();
  const navItems = [
    { path: '/settings/info', label: 'User Info', icon: UserRound },
    { path: '/settings/privacy', label: 'Privacy', icon: Lock },
    { path: '/settings/misc', label: 'Misc.', icon: Settings2 },
  ];

  return (
    <nav className="flex flex-col w-48 border-r">
      {navItems.map(({ path, label, icon: Icon }) => (
        <button
          key={path}
          onClick={() => navigate(path)}
          className={`... ${location.pathname === path ? SELECTED_STYLE : UNSELECTED_STYLE} flex gap-1 items-center px-4 py-3 text-left text-sm`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </nav>
  );
}
