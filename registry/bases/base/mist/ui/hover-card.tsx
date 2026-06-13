'use client'

import * as React from 'react'
import { PreviewCard as HoverCardPrimitive } from '@base-ui/react/preview-card'

import { cn } from '@/registry/core/lib/utils'

type HoverCardProps = HoverCardPrimitive.Root.Props & {
    openDelay?: number
    closeDelay?: number
}

const HoverCardDelayContext = React.createContext<Pick<HoverCardProps, 'openDelay' | 'closeDelay'>>({})

function HoverCard({ openDelay, closeDelay, children, ...props }: HoverCardProps) {
    return (
        <HoverCardPrimitive.Root
            data-slot="hover-card"
            {...props}>
            <HoverCardDelayContext.Provider value={{ openDelay, closeDelay }}>{children as React.ReactNode}</HoverCardDelayContext.Provider>
        </HoverCardPrimitive.Root>
    )
}

function HoverCardTrigger({ delay, closeDelay, ...props }: HoverCardPrimitive.Trigger.Props) {
    const delayContext = React.useContext(HoverCardDelayContext)

    return (
        <HoverCardPrimitive.Trigger
            data-slot="hover-card-trigger"
            delay={delay ?? delayContext.openDelay}
            closeDelay={closeDelay ?? delayContext.closeDelay}
            {...props}
        />
    )
}

type HoverCardContentProps = HoverCardPrimitive.Popup.Props & Pick<HoverCardPrimitive.Positioner.Props, 'align' | 'side' | 'sideOffset'>

function HoverCardContent({ className, align = 'center', sideOffset = 4, side, ...props }: HoverCardContentProps) {
    return (
        <HoverCardPrimitive.Portal data-slot="hover-card-portal">
            <HoverCardPrimitive.Positioner
                data-slot="hover-card-positioner"
                align={align}
                side={side}
                sideOffset={sideOffset}>
                <HoverCardPrimitive.Popup
                    data-slot="hover-card-content"
                    className={cn(
                        'bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--transform-origin) outline-hidden rounded-(--radius) ring-foreground/10 z-50 w-64 border border-transparent p-4 shadow-md ring-1',
                        className
                    )}
                    {...props}
                />
            </HoverCardPrimitive.Positioner>
        </HoverCardPrimitive.Portal>
    )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
