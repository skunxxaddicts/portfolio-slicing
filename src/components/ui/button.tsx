import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Default - no colors, fully customizable
        default: 'rounded-full shadow-md hover:shadow-lg transition-all',
        // Primary button - golden yellow with dark text and arrow
        primary:
          'rounded-full bg-[var(--color-secondary-100)] text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-100)] focus-visible:ring-[var(--color-secondary)] shadow-md hover:shadow-lg transition-shadow relative justify-start pl-4 pr-16',
        // Secondary/Accent button - using custom secondary color
        secondary:
          'rounded-full bg-[var(--color-secondary)] text-[var(--color-neutral-900)] hover:bg-[var(--color-secondary-100)] focus-visible:ring-[var(--color-secondary)]',
        // Outline button - no colors, customizable
        outline: 'rounded-full border-2 bg-transparent transition-all',
        // Outline white (for dark backgrounds)
        outlineWhite:
          'rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-[var(--color-primary)] focus-visible:ring-white',
        // Ghost button - no colors, customizable
        ghost: 'rounded-lg bg-transparent transition-all',
        // Link button - no colors, customizable
        link: 'underline-offset-4 hover:underline transition-all',
        // Destructive
        destructive:
          'rounded-full bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm has-[>svg]:px-3',
        default: 'h-11 px-6 py-3 text-base has-[>svg]:px-4',
        lg: 'h-14 py-4 text-lg',
        icon: 'size-10 rounded-full',
        'icon-sm': 'size-9 rounded-full',
        'icon-lg': 'size-12 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
