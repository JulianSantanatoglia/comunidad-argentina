import { forwardRef, cloneElement } from 'react';
import type { ButtonHTMLAttributes, ReactElement } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300',
      secondary: 'bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600 active:from-sky-600 active:to-blue-700 shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-300',
      outline: 'border-2 border-blue-400/50 text-blue-600 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 hover:border-blue-500 active:bg-blue-100 transition-all duration-300',
      ghost: 'text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 active:bg-blue-100 transition-all duration-300',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && typeof children === 'object' && children !== null && 'props' in children) {
      const child = children as ReactElement<any>;
      const childProps = child.props as any;
      return cloneElement(child, {
        ...childProps,
        className: cn(childProps?.className, classes),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
