// src/components/ui/Container.tsx
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', children, ...props }, ref) => {
    const sizes = {
      sm: 'max-w-[640px]',
      md: 'max-w-[960px]',
      lg: 'max-w-[1280px]',
      xl: 'max-w-[1440px]',
      full: 'max-w-full',
    };
    
    return (
      <div
        ref={ref}
        className={cn('wrap mx-auto', sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';