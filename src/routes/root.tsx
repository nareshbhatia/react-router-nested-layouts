import { AppHeader } from '@/components/AppHeader';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AppHeader />
      <main className="container max-w-screen-lg flex-1">
        <Outlet />
      </main>
    </div>
  );
}
