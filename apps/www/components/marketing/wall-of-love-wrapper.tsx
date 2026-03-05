'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Button } from '@tailark/core/ui/button'
import { cn } from '@/lib/utils'

export function WallOfLoveWrapper({ children }: { children: React.ReactNode }) {
    const [isFullHeight, setIsFullHeight] = useState(false)
    return (
        <div className="relative">
            <motion.div
                initial={{ height: '40rem' }}
                animate={{ height: isFullHeight ? 'auto' : '56rem' }}
                className={cn('overflow-y-hidden', !isFullHeight && 'mask-b-from-80%')}>
                {children}
            </motion.div>
            <div className="pt-6 text-center">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFullHeight(!isFullHeight)}
                    className="text-sm! z-10 mx-auto w-fit">
                    {isFullHeight ? 'See less tweets' : 'See more tweets'}
                    <span className={cn('border-t-foreground/50 ml-0.5 block size-0 border-x-4 border-t-4 border-x-transparent', isFullHeight && 'rotate-180')} />
                </Button>
            </div>
        </div>
    )
}
