import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/registry/core/lib/utils'

const buttonVariants = cva('cursor-pointer active:scale-99 duration-200 font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-foreground text-background hover:brightness-95',
            neutral: 'bg-foreground text-background hover:brightness-95',
            destructive: 'bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90',
            outline: 'shadow-sm text-foreground shadow-black/6.5 border border-transparent bg-card ring-1 ring-foreground/15 duration-200 hover:bg-muted/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-foreground/5 text-foreground/75 hover:text-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
            default: 'h-8 px-3 py-2',
            sm: 'h-7 px-2.5 text-sm',
            lg: 'h-11 px-6 font-medium text-base',
            icon: 'size-9',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})

function Button({ className, variant = 'default', size = 'default', ...props }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
    return (
        <ButtonPrimitive
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
