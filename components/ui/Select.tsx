import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import type { SelectHTMLAttributes } from 'react';

type Size = 'sm' | 'md';

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-3 rounded-xl',
  md: 'px-6 py-3 rounded-pill',
};

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  size?: Size;
}

export default function Select({ size = 'md', className, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={clsx(
          'w-full bg-surface border border-border appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-accent/30 transition shadow-sm',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
    </div>
  );
}
