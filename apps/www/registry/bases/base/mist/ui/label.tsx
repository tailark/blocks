'use client'

import { Field as FieldPrimitive } from '@base-ui/react/field'

import { cn } from '@/registry/core/lib/utils'

function Label({ className, ...props }: FieldPrimitive.Label.Props) {
    return (
        <FieldPrimitive.Label
            data-slot="label"
            className={cn('block select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50', className)}
            {...props}
        />
    )
}

export { Label }
