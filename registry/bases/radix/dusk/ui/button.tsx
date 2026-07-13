import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/registry/core/lib/utils'

const buttonVariants = cva('cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none active:scale-98 duration-200 [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'shadow-sm shadow-black/10 bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90',
            outline: 'shadow-sm bg-foreground/5 shadow-black/10  ring-1 ring-foreground/10 duration-200 hover:bg-muted/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-foreground/6.5 hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
            default: 'h-9 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
            xs: "h-6 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-8 px-3 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
            lg: 'h-10 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
            icon: 'size-9',
            'icon-xs': "size-6 [&_svg:not([class*='size-'])]:size-3",
            'icon-sm': 'size-8',
            'icon-lg': 'size-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
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
