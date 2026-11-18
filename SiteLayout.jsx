import { Outlet } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import DandaraChat from '@/components/DandaraChat';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main data-read-root className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <DandaraChat />
    </div>
  );
}
