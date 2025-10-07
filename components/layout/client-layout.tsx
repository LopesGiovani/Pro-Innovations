'use client';

import { usePageTransition } from '@/hooks/use-page-transition';
import { PageLoader } from '@/components/ui/page-loader';
import { PageTransition } from '@/components/ui/page-transition';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isLoading } = usePageTransition();

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
}