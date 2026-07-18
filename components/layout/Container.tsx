import clsx from 'clsx';
import type { ReactNode } from 'react';

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('container mx-auto px-6 lg:px-12', className)}>{children}</div>;
}
