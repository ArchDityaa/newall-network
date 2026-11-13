// src/components/ui/Button.tsx
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost' | 'ink';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', loading, disabled, children, asChild, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-mono font-semibold transition-colors transition-transform duration-200 ease-out rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]';
    
    const variants = {
      solid: 'bg-orange border-orange border-1.5 text-ink hover:bg-paper hover:border-paper on-paper:hover:bg-ink on-paper:hover:border-ink on-paper:hover:text-paper',
      outline: 'border-current border-1.5 bg-transparent hover:bg-current/10',
      ghost: 'border-transparent bg-transparent hover:bg-current/5',
      ink: 'bg-ink border-ink border-1.5 text-paper hover:bg-transparent hover:text-ink',
    };
    
    const sizes = {
      sm: 'min-h-[36px] text-xs px-3 gap-1.5',
      md: 'min-h-[48px] text-sm px-6 gap-2',
      lg: 'min-h-[56px] text-base px-8 gap-2.5',
    };
    
    if (asChild) {
      return (
        <button
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          disabled={disabled || loading}
          {...props}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M12 2a10 10 0 0 1 10 10A10 10 0 0 1 12 2z" />
              </svg>
              <span>Loading...</span>
            </>
          ) : (
            children
          )}
        </button>
      );
    }
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M12 2a10 10 0 0 1 10 10A10 10 0 0 1 12 2z" />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';