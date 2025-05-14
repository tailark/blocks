# Tailark Mist Kit

Shadcn Blocks for building Wiki-Style websites

## Theme

### Quickstart: Add the Mist Kit Theme

Copy and paste the following CSS variables into your project's global CSS (e.g., `globals.css`). This will enable the Mist Kit theme:

```css
:root {
    --radius: 0.625rem;
    --background: var(--color-white);
    --foreground: var(--color-zinc-950);
    --card: var(--color-white);
    --card-foreground: var(--color-zinc-950);
    --popover: var(--color-white);
    --popover-foreground: var(--color-zinc-950);
    --primary: var(--color-indigo-500);
    --primary-foreground: var(--color-white);
    --secondary: var(--color-indigo-100);
    --secondary-foreground: var(--color-indigo-600);
    --muted: var(--color-zinc-100);
    --muted-foreground: var(--color-zinc-600);
    --accent: var(--color-zinc-700);
    --accent-foreground: var(--color-white);
    --destructive: var(--color-red-600);
    --destructive-foreground: var(--color-white);
    --border: var(--color-zinc-200);
    --input: var(--color-zinc-200);
    --ring: var(--color-indigo-500);
    --chart-1: var(--color-blue-500);
    --chart-2: var(--color-indigo-500);
    --chart-3: var(--color-purple-500);
    --chart-4: var(--color-cyan-400);
    --chart-5: var(--color-red-500);
}
```

This enables all Mist Kit components to inherit the correct theme values.


## Button

### New Variant: `neutral`
The Button component now supports a new `neutral` variant for a minimal, neutral look.

**Usage:**
```tsx
<Button variant="neutral">Neutral Button</Button>
```

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('cursor-pointer font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:brightness-95',
            neutral: 'bg-foreground text-background hover:brightness-95',
            destructive: 'bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90',
            outline: 'shadow-sm text-foreground shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 duration-200 hover:bg-muted/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-foreground/5 text-foreground/75 hover:text-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
            default: 'h-9 px-4 py-2 rounded-md',
            sm: 'h-8 px-3 rounded-full text-sm',
            lg: 'h-11 px-6 font-medium text-base',
            icon: 'size-9',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'sm',
    },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
```

## Card

### New Variants: `soft` and `mixed`
The Card component now supports two new variants:
- `soft`: Subtle background, no border.
- `mixed`: Subtle background with a border.

**Usage:**
```tsx
<Card variant="soft">
  <CardHeader>Soft Card</CardHeader>
  <CardContent>...</CardContent>
</Card>

<Card variant="mixed">
  <CardHeader>Mixed Card</CardHeader>
  <CardContent>...</CardContent>
</Card>
```

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva('text-card-foreground rounded-xl', {
    variants: {
        variant: {
            default: 'bg-card border shadow border-transparent ring-1 ring-foreground/5',
            soft: 'bg-foreground/5',
            mixed: 'bg-foreground/5 border border-foreground.5',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
})

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
    />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
    />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('font-semibold leading-none tracking-tight', className)}
        {...props}
    />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-muted-foreground text-sm', className)}
        {...props}
    />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
    />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
    />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

