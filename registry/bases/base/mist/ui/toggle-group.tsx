'use client'

import * as React from 'react'
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle'
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/registry/core/lib/utils'
import { toggleVariants } from '@/registry/bases/base/mist/ui/toggle'

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
    size: 'default',
    variant: 'default',
})

type ToggleGroupProps = ToggleGroupPrimitive.Props &
    VariantProps<typeof toggleVariants> & {
        type?: 'single' | 'multiple'
    }

function ToggleGroup({ className, variant, size, children, type, multiple, ...props }: ToggleGroupProps) {
    return (
        <ToggleGroupPrimitive
            data-slot="toggle-group"
            data-variant={variant}
            data-size={size}
            className={cn('group/toggle-group data-[variant=outline]:shadow-xs flex w-fit items-center rounded-md', className)}
            multiple={multiple ?? type === 'multiple'}
            {...props}>
            <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
        </ToggleGroupPrimitive>
    )
}

function ToggleGroupItem({ className, children, variant, size, ...props }: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
    const context = React.useContext(ToggleGroupContext)

    return (
        <TogglePrimitive
            data-slot="toggle-group-item"
            data-variant={context.variant || variant}
            data-size={context.size || size}
            className={cn(
                toggleVariants({
                    variant: context.variant || variant,
                    size: context.size || size,
                }),
                'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
                className
            )}
            {...props}>
            {children}
        </TogglePrimitive>
    )
}

export { ToggleGroup, ToggleGroupItem }
