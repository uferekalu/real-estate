import Link from 'next/link';
import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'accent' | 'dark' | 'outline';
type Shape = 'pill' | 'card';

interface ButtonOwnProps {
  variant?: Variant;
  shape?: Shape;
  fullWidth?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
}

export type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps>;

const variantClasses: Record<Variant, string> = {
  accent:
    'bg-accent text-text-heading hover:bg-accent-hover shadow-sm shadow-accent/20 hover:shadow-md hover:shadow-accent/25',
  dark: 'bg-surface-inverted/75 text-text-inverted hover:bg-surface-inverted',
  outline: 'border-2 border-accent text-accent hover:bg-accent/5 hover:text-text-heading',
};

const shapeClasses: Record<Shape, string> = {
  pill: 'rounded-pill px-10 py-5 text-lg',
  card: 'rounded-card px-6 py-4 text-base w-full',
};

export default function Button({
  variant = 'accent',
  shape = 'pill',
  fullWidth = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-3 font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0',
    variantClasses[variant],
    shapeClasses[shape],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
