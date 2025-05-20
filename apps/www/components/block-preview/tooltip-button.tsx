import React from 'react'
import { Button, ButtonProps } from '@tailark/core/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@tailark/core/ui/tooltip'
import Link from 'next/link'

export interface TooltipButtonProps extends Omit<ButtonProps, 'onClick'> {
    tooltip: string
    icon?: React.ReactNode
    asLink?: {
        href: string
        target?: string
    }
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    className?: string
    children?: React.ReactNode
}

export const TooltipButton: React.FC<TooltipButtonProps> = ({ onClick, tooltip, icon, asChild = false, variant = 'ghost', size = 'sm', className, children, asLink, ...props }) => {
    const content = (
        <Button
            variant={variant}
            size={size}
            onClick={onClick}
            className={className}
            asChild={asChild || !!asLink}
            {...props}>
            {asLink ? (
                <Link
                    href={asLink.href}
                    target={asLink.target}
                    className="flex items-center gap-1.5">
                    {icon}
                    {children}
                </Link>
            ) : (
                <>
                    {icon}
                    {children}
                </>
            )}
        </Button>
    )

    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>{content}</TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipButton
