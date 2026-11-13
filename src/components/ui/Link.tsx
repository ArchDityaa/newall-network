// src/components/ui/Link.tsx
import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { cn } from '@lib/utils';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'underline' | 'pill' | 'pill-solid' | 'pill-ink';
  asChild?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = 'default', href = '#', asChild, children, ...props }, ref) => {
    const variants = {
      default: 'u-link text-current',
      underline: 'u-link text-current underline-offset-2',
      pill: 'pill',
      'pill-solid': 'pill pill-solid',
      'pill-ink': 'pill pill-ink',
    };
    
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    if (asChild) {
      return (
        <a
          ref={ref}
          href={href}
          className={cn(variants[variant], className)}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    }
    
    return (
      <a
        ref={ref}
        href={href}
        className={cn(variants[variant], className)}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';