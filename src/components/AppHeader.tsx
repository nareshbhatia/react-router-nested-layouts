import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

const links = [
  {
    route: '/',
    title: 'Home',
  },
  {
    route: '/movies',
    title: 'Movies',
  },
];

export function AppHeader() {
  const activeClass = cn(
    'transition-colors text-foreground hover:text-foreground/80'
  );

  const inactiveClass = cn(
    'transition-colors text-foreground/60 hover:text-foreground/80'
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-lg items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                key={link.route}
                to={link.route}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
