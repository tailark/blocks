import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@tailark/core/lib/utils'

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
