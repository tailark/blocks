'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useMedia } from 'use-media'
import { cn } from '@/lib/utils'

type LogoGroup = 'ai' | 'saas' | 'ecommerce'

const logos: { [key in LogoGroup]: { src: string; alt: string; height: number; width: number }[] } = {
    ai: [
        { src: 'https://pro.tailark.com/clients/figma.svg', alt: 'Figma', height: 65, width: 215 },
        { src: 'https://pro.tailark.com/clients/gradial.svg', alt: 'Gradial', height: 65, width: 215 },
        { src: 'https://pro.tailark.com/clients/promptwatch.svg', alt: 'Promptwatch', height: 114, width: 740 },
        { src: 'https://pro.tailark.com/clients/hyper.svg', alt: 'Hyper AI', height: 40, width: 163 },
        { src: 'https://pro.tailark.com/clients/adapty.svg', alt: 'Adapty', height: 40, width: 163 },
        { src: 'https://pro.tailark.com/clients/cevoid.svg', alt: 'Cevoid', height: 40, width: 163 },
        { src: 'https://pro.tailark.com/clients/micro.svg', alt: 'Micro', height: 40, width: 163 },
        { src: 'https://pro.tailark.com/clients/ressemble-ai.webp', alt: 'Ressemble AI', height: 48, width: 201 },
    ],
    saas: [
        { src: 'https://pro.tailark.com/clients/classet.svg', alt: 'Classet', height: 76, width: 294 },
        { src: 'https://pro.tailark.com/clients/nura.avif', alt: 'Nura', height: 48, width: 156 },
        { src: 'https://pro.tailark.com/clients/creem.svg', alt: 'Creem', height: 48, width: 201 },
        { src: 'https://pro.tailark.com/clients/cobuild.svg', alt: 'CoBuild', height: 40, width: 201 },
        { src: 'https://pro.tailark.com/clients/redbark.svg', alt: 'Redbark', height: 40, width: 201 },
        { src: 'https://pro.tailark.com/clients/xrouten.svg', alt: 'XRouten', height: 56, width: 201 },
        { src: 'https://pro.tailark.com/clients/structurely.svg', alt: 'Structurely', height: 48, width: 201 },
        { src: 'https://pro.tailark.com/clients/noweb.svg', alt: 'Noweb', height: 48, width: 201 },
    ],
    ecommerce: [
        { src: 'https://pro.tailark.com/clients/throne.avif', alt: 'Throne', height: 317, width: 1286 },
        { src: 'https://pro.tailark.com/clients/roopairs.png', alt: 'RooPairs', height: 48, width: 201 },
        { src: 'https://pro.tailark.com/clients/abler.webp', alt: 'Abler', height: 165, width: 637 },
        { src: 'https://pro.tailark.com/clients/oratory.svg', alt: 'Oratory', height: 65, width: 215 },
        { src: 'https://pro.tailark.com/clients/fortiv.svg', alt: 'Fortiv', height: 48, width: 201 },
        { src: 'https://pro.tailark.com/clients/cevoid.svg', alt: 'Cevoid', height: 40, width: 163 },
        { src: 'https://pro.tailark.com/clients/qanapi.svg', alt: 'Qanapi', height: 48, width: 201 },
        { src: 'https://pro.tailark.com/clients/terac.svg', alt: 'Terac', height: 32, width: 32 },
    ],
}

const pricingLogos = [
    { src: 'https://pro.tailark.com/clients/figma.svg', alt: 'Figma', height: 65, width: 215 },
    { src: 'https://pro.tailark.com/clients/promptwatch.svg', alt: 'Promptwatch', height: 114, width: 740 },
    { src: 'https://pro.tailark.com/clients/creem.svg', alt: 'Creem', height: 48, width: 201 },
    { src: 'https://pro.tailark.com/clients/oratory.svg', alt: 'Oratory', height: 65, width: 215 },
]

const allLogos = Object.values(logos).flat()

export function LogoCloud() {
    const [currentGroup, setCurrentGroup] = useState<LogoGroup>('ai')
    const isDesktop = useMedia('(min-width: 1024px)')

    useEffect(() => {
        if (!isDesktop) {
            return
        }

        const interval = setInterval(() => {
            setCurrentGroup((prev) => {
                const groupKeys = Object.keys(logos) as LogoGroup[]
                const currentIndex = groupKeys.indexOf(prev)
                const nextIndex = (currentIndex + 1) % groupKeys.length
                return groupKeys[nextIndex]
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [isDesktop])

    return (
        <div className="overflow-hidden lg:mt-12">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-6 pb-6">
                    <p className="text-foreground/60 mx-auto max-w-2xl text-balance text-center tracking-tight">Trusted by people from</p>

                    <div className="col-span-full">
                        {isDesktop ? (
                            <div className="grid grid-cols-3 items-center gap-y-12 sm:grid-cols-4 lg:flex lg:justify-between">
                                <AnimatePresence
                                    initial={false}
                                    mode="popLayout">
                                    {logos[currentGroup].map((logo, i) => (
                                        <motion.div
                                            key={`${currentGroup}-${i}`}
                                            className="flex h-10 items-center justify-center"
                                            initial={{ opacity: 0, x: -32, filter: 'blur(6px)' }}
                                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                            exit={{ opacity: 0, x: 32, filter: 'blur(6px)', scale: 0.5 }}
                                            transition={{ delay: i * 0.07, duration: 1, type: 'spring', bounce: 0.2 }}>
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={logo.width}
                                                height={logo.height}
                                                className={cn('h-5 w-auto grayscale', logo.alt == 'Ressemble AI' && 'h-7', (logo.alt == 'Adapty' || logo.alt == 'Redbark') && 'h-6', (logo.alt == 'CoBuild' || logo.alt == 'Noweb' || logo.alt == 'Micro') && 'h-4', logo.src.includes('roopairs') || logo.src.includes('cobuild') || logo.src.includes('ressemble') ? 'not-dark:invert' : 'dark:invert')}
                                            />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="mask-x-from-98% -mx-4 overflow-hidden">
                                <motion.div
                                    className="flex w-max items-center gap-10"
                                    animate={{ x: ['0%', '-50%'] }}
                                    transition={{ duration: 60, ease: 'linear', repeat: Infinity }}>
                                    {[...allLogos, ...allLogos].map((logo, i) => (
                                        <div
                                            key={`all-${logo.src}-${i}`}
                                            className="flex h-10 shrink-0 items-center">
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={logo.width}
                                                height={logo.height}
                                                className={cn('h-5 w-auto grayscale', logo.alt == 'Ressemble AI' && 'h-7', (logo.alt == 'Adapty' || logo.alt == 'Redbark') && 'h-6', (logo.alt == 'CoBuild' || logo.alt == 'Noweb' || logo.alt == 'Micro') && 'h-4', logo.src.includes('roopairs') || logo.src.includes('cobuild') || logo.src.includes('ressemble') ? 'not-dark:invert' : 'dark:invert')}
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PricingLogoCloud() {
    return (
        <div className="space-y-12 pt-12">
            <p className="text-foreground/60 mx-auto max-w-2xl text-balance text-center tracking-tight">Trusted by people from</p>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
                {pricingLogos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={cn('h-5 w-auto grayscale', logo.alt == 'Ressemble AI' && 'h-7', (logo.alt == 'Adapty' || logo.alt == 'Redbark') && 'h-6', (logo.alt == 'CoBuild' || logo.alt == 'Noweb' || logo.alt == 'Micro') && 'h-4', logo.src.includes('roopairs') || logo.src.includes('cobuild') || logo.src.includes('ressemble') ? 'not-dark:invert' : 'dark:invert')}
                    />
                ))}
            </div>
        </div>
    )
}
