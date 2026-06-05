import * as React from 'react'
import { cn } from '@tailark/core/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            data-slot="textarea"
            className={cn('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/15 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive field-sizing-content not-dark:bg-card flex min-h-16 w-full rounded-md border px-3 py-2 text-base outline-none transition-colors focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className)}
            {...props}
        />
    )
}

export { Textarea }
