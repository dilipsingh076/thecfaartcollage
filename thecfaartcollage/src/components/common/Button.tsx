'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-full font-medium transition-all duration-300',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'primary',
          'border border-primary text-primary hover:bg-primary/10': variant === 'outline',
          'text-primary hover:bg-primary/10': variant === 'ghost',
          'px-3 py-1 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </button>
  );
}