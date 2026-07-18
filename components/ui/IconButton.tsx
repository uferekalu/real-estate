import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type Variant = 'glass' | 'solid' | 'ghost';

const variantClasses: Record<Variant, string> = {
  glass: 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-text-inverted',
  solid: 'bg-surface-muted hover:bg-border text-text-heading',
  ghost: 'hover:bg-surface-muted text-text-heading',
};

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function IconButton({ variant = 'glass', className, ...props }: IconButtonProps) {
  return (
    <button
      className={clsx('p-3 rounded-pill transition-colors', variantClasses[variant], className)}
      {...props}
    />
  );
}
