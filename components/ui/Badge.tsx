import clsx from 'clsx';
import type { ReactNode } from 'react';

type Status = 'available' | 'pending' | 'sold' | 'rented';

const statusClasses: Record<Status, string> = {
  available: 'bg-status-available/90 text-text-inverted',
  pending: 'bg-status-pending/90 text-text-inverted',
  sold: 'bg-status-sold/90 text-text-inverted',
  rented: 'bg-status-rented/90 text-text-inverted',
};

export default function Badge({ status, children }: { status: Status; children: ReactNode }) {
  return (
    <span className={clsx('px-4 py-2 rounded-pill text-sm font-medium', statusClasses[status])}>
      {children}
    </span>
  );
}
