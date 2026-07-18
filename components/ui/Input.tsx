import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

type Size = 'sm' | 'md';

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-3 rounded-xl',
  md: 'px-6 py-4 rounded-card',
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: Size;
}

export default function Input({ size = 'md', className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'w-full bg-surface border border-border text-text-heading placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition shadow-sm',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
