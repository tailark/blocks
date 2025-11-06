'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

type HeroProps = {
    src: string
    alt: string
    width: number
    height: number
    className?: string
}

export const HeroPagesIllustration = ({ src, alt, width, height, className }: HeroProps) => {
    const { scrollY } = useScroll()
    const parallaxFactor = -0.12
    const y = useTransform(scrollY, [0, 500], [0, 500 * parallaxFactor], { clamp: false })

    return (
        <motion.div className={cn('bg-background max-sm:aspect-3/2 aspect-4/5 z-10 m-auto mx-auto max-w-xl overflow-hidden rounded-xl max-sm:h-fit', className)}>
            <motion.div
                style={{ y }}
                className="h-fit w-full">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes="(max-width: 1024px) 0px, 686px"
                    className="h-fit w-full"
                />
            </motion.div>
        </motion.div>
    )
}
