'use client'

import { Select as SelectPrimitive } from '@base-ui/react/select'
import { CheckIcon, ChevronDownIcon, ChevronsUpDown, ChevronUpIcon } from 'lucide-react'
import { cn } from '@/registry/core/lib/utils'

function Select<Value, Multiple extends boolean | undefined = false>({ ...props }: SelectPrimitive.Root.Props) {
    return (
        <SelectPrimitive.Root
            data-slot="select"
            {...props}
        />
    )
}

function SelectGroup({ ...props }: SelectPrimitive.Group.Props) {
    return (
        <SelectPrimitive.Group
            data-slot="select-group"
            {...props}
        />
    )
}

function SelectValue({ ...props }: SelectPrimitive.Value.Props) {
    return (
        <SelectPrimitive.Value
            data-slot="select-value"
            {...props}
        />
    )
}

function SelectTrigger({ className, children, ...props }: SelectPrimitive.Trigger.Props) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            className={cn(
                "border-input data-placeholder:text-muted-foreground aria-invalid:border-destructive ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground shadow-xs aria-invalid:focus-visible:ring-0 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&>span]:line-clamp-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon data-slot="select-icon">
                <ChevronsUpDown className="size-3 opacity-50" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
}

type SelectContentProps = SelectPrimitive.Popup.Props &
    Pick & {
        position?: 'popper' | 'item-aligned'
    }

function SelectContent({ className, children, align = 'start', alignItemWithTrigger, side, sideOffset = 4, position = 'popper', ...props }: SelectContentProps) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Positioner
                data-slot="select-positioner"
                align={align}
                alignItemWithTrigger={alignItemWithTrigger ?? position !== 'popper'}
                side={side}
                sideOffset={sideOffset}
            >
                <SelectPrimitive.Popup
                    data-slot="select-content"
                    className={cn(
                        'bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--transform-origin) relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border shadow-md',
                        position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                        className
                    )}
                    {...props}
                >
                    <SelectScrollUpButton />
                    <SelectPrimitive.List
                        data-slot="select-viewport"
                        className={cn(position === 'popper' && 'min-w-(--anchor-width) w-full scroll-my-1')}
                    >
                        {children}
                    </SelectPrimitive.List>
                    <SelectScrollDownButton />
                </SelectPrimitive.Popup>
            </SelectPrimitive.Positioner>
        </SelectPrimitive.Portal>
    )
}

function SelectLabel({ className, ...props }: SelectPrimitive.GroupLabel.Props) {
    return (
        <SelectPrimitive.GroupLabel
            data-slot="select-label"
            className={cn('px-2 py-1.5 text-sm font-semibold', className)}
            {...props}
        />
    )
}

function SelectItem({ className, children, ...props }: SelectPrimitive.Item.Props) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn("data-highlighted:bg-foreground/5 data-highlighted:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground outline-hidden *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 data-disabled:pointer-events-none data-disabled:opacity-50 relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className)}
            {...props}
        >
            <span
                data-slot="select-item-indicator"
                className="absolute right-2 flex size-3.5 items-center justify-center"
            >
                <SelectPrimitive.ItemIndicator>
                    <CheckIcon
                        className="size-3"
                        strokeWidth={3}
                    />
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
}

function SelectSeparator({ className, ...props }: SelectPrimitive.Separator.Props) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
            {...props}
        />
    )
}

function SelectScrollUpButton({ className, ...props }: SelectPrimitive.ScrollUpArrow.Props) {
    return (
        <SelectPrimitive.ScrollUpArrow
            data-slot="select-scroll-up-button"
            className={cn('flex cursor-default items-center justify-center py-1', className)}
            {...props}
        >
            <ChevronUpIcon className="size-4" />
        </SelectPrimitive.ScrollUpArrow>
    )
}

function SelectScrollDownButton({ className, ...props }: SelectPrimitive.ScrollDownArrow.Props) {
    return (
        <SelectPrimitive.ScrollDownArrow
            data-slot="select-scroll-down-button"
            className={cn('flex cursor-default items-center justify-center py-1', className)}
            {...props}
        >
            <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ScrollDownArrow>
    )
}

export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue }
