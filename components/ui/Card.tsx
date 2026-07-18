import clsx from 'clsx';
import type { ReactNode } from 'react';

export default function Card({
  children,
  className,
  hoverable = true,
}: {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  return (
    <div
      className={clsx(
        'bg-surface rounded-card shadow-sm',
        hoverable && 'hover:shadow-md transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
