'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { LogoIcon } from '@/components/logo'
import { Receipt } from 'lucide-react'
import { Neon } from '@tailark/core/components/ui/svgs/neon'
import { Supabase } from '@tailark/core/components/ui/svgs/supabase'
import { Firebase } from '@tailark/core/components/ui/svgs/firebase'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@tailark/core/lib/utils'

const CYCLE_DURATION = 1900

const firstPathTransition = {
    duration: 1.5,
    ease: 'easeInOut' as const,
    repeat: Infinity,
}

const branchPathTransition = {
    duration: 1.5,
    ease: 'easeOut' as const,
    delay: 0.75,
    repeat: Infinity,
}

type DBProvider = {
    name: string
    icon: React.ReactNode
    color: string
    iconBackground: string
    beamColorFrom: string
    beamColorTo: string
}

const providers: DBProvider[] = [
    {
        name: 'Neon',
        icon: <Neon />,
        color: 'from-[#00E0D9] to-[#63F655]',
        iconBackground: 'bg-emerald-950',
        beamColorFrom: '#00E0D9',
        beamColorTo: '#63F655',
    },
    {
        name: 'Supabase',
        icon: <Supabase />,
        color: 'from-[#249361] to-[#3ECF8E]',
        iconBackground: 'bg-green-950',
        beamColorFrom: '#249361',
        beamColorTo: '#3ECF8E',
    },
    {
        name: 'Firebase',
        icon: <Firebase />,
        color: 'from-[#FFC400] to-[#DD2C00]',
        iconBackground: 'bg-red-950 dark:bg-red-950/50',
        beamColorFrom: '#FFC400',
        beamColorTo: '#DD2C00',
    },
]

export const Flow12Illustration = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [activeProvider, setActiveProvider] = useState(0)
    const [containerWidth, setContainerWidth] = useState('auto')
    const contentRef = useRef(null)

    useEffect(() => {
        if (!isHovered) return

        const interval = setInterval(() => {
            setActiveProvider((prev) => (prev + 1) % providers.length)
        }, CYCLE_DURATION)

        return () => clearInterval(interval)
    }, [isHovered])

    useEffect(() => {
        const updateWidth = () => {
            if (contentRef.current) {
                const width = (contentRef.current as HTMLElement).offsetWidth
                setContainerWidth(`${width}px`)
            }
        }

        updateWidth()
        const timer = setTimeout(updateWidth, 100)

        return () => clearTimeout(timer)
    }, [activeProvider])

    const currentProvider = useMemo(() => providers[activeProvider], [activeProvider])

    return (
        <motion.div
            aria-hidden
            className="relative flex min-h-[420px] w-fit min-w-[420px] items-center justify-center"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}>
            <svg
                viewBox="0 0 432 262"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground/10 absolute inset-0 left-20 right-0 my-auto w-9/12">
                <path
                    d="M0.5 131.5H299"
                    stroke="currentColor"
                    strokeLinecap="round"
                />
                <path
                    d="M299 131.5C318.13 131.5 336.364 121.518 346.647 105.387C352.381 96.393 355.5 85.8339 355.5 75.1682V56.5C355.5 25.5721 380.572 0.5 411.5 0.5H431"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeDasharray="2 5"
                    className="text-foreground/15"
                />
                <path
                    d="M319 131.5C337.749 128.859 354.5 143.416 354.5 162.35V205.5C354.5 236.428 379.572 261.5 410.5 261.5H429"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeDasharray="2 5"
                    className="text-foreground/15"
                />

                <motion.path
                    d="M0.5 131.5H299"
                    pathLength="1"
                    stroke="var(--color-foreground)"
                    strokeLinecap="round"
                    strokeWidth={1}
                    strokeDasharray="0.15 2"
                    initial={{ strokeDashoffset: 1.15 }}
                    animate={isHovered ? { strokeDashoffset: -1 } : { strokeDashoffset: 1.15 }}
                    transition={isHovered ? firstPathTransition : { duration: 0 }}
                />

                <motion.path
                    d="M299 131.5C318.13 131.5 336.364 121.518 346.647 105.387C352.381 96.393 355.5 85.8339 355.5 75.1682V56.5C355.5 25.5721 380.572 0.5 411.5 0.5H431"
                    pathLength="1"
                    stroke="url(#providerColor)"
                    strokeLinecap="round"
                    strokeWidth={1}
                    strokeDasharray="0.4 3"
                    initial={{ strokeDashoffset: 1.4 }}
                    animate={isHovered ? { strokeDashoffset: -1 } : { strokeDashoffset: 1.4 }}
                    transition={isHovered ? branchPathTransition : { duration: 0 }}
                />
                <motion.path
                    d="M319 131.5C337.749 128.859 354.5 143.416 354.5 162.35V205.5C354.5 236.428 379.572 261.5 410.5 261.5H429"
                    pathLength="1"
                    stroke="url(#flow12)"
                    strokeLinecap="round"
                    strokeWidth={1}
                    strokeDasharray="0.4 3"
                    initial={{ strokeDashoffset: 1.4 }}
                    animate={isHovered ? { strokeDashoffset: -1 } : { strokeDashoffset: 1.4 }}
                    transition={isHovered ? branchPathTransition : { duration: 0 }}
                />

                <defs>
                    <linearGradient
                        id="flow12"
                        gradientUnits="userSpaceOnUse"
                        x1="319"
                        y1="131"
                        x2="429"
                        y2="261">
                        <stop
                            offset="0%"
                            stopColor="var(--color-emerald-300)"
                            stopOpacity={0}
                        />
                        <stop
                            offset="25%"
                            stopColor="var(--color-emerald-400)"
                            stopOpacity={0.5}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--color-purple-400)"
                        />
                    </linearGradient>
                    <linearGradient
                        id="providerColor"
                        gradientUnits="userSpaceOnUse"
                        x1="299"
                        y1="131"
                        x2="431"
                        y2="0.5">
                        <stop
                            offset="0%"
                            stopColor={providers[activeProvider].beamColorFrom}
                            stopOpacity={0}
                        />
                        <stop
                            offset="100%"
                            stopColor={providers[activeProvider].beamColorTo}
                        />
                    </linearGradient>
                </defs>
            </svg>

            <div className="relative z-10 flex items-center">
                <div className="bg-illustration corner-tr-bevel ring-border-illustration shadow-black/6.5 relative w-20 rounded-md rounded-tr-[15%] p-2.5 shadow-md ring-1">
                    <div className="mb-2 flex items-center gap-1.5">
                        <Receipt className="size-3 text-amber-500" />
                        <span className="text-[9px] font-semibold">INVOICE</span>
                    </div>
                    <div className="space-y-1.5">
                        <div className="bg-foreground/10 h-0.5 w-full rounded-full" />
                        <div className="flex gap-1">
                            <div className="bg-foreground/10 h-0.5 w-1/2 rounded-full" />
                            <div className="bg-foreground/10 h-0.5 w-1/2 rounded-full" />
                        </div>
                        <div className="flex gap-1">
                            <div className="bg-foreground/10 h-0.5 w-1/4 rounded-full" />
                            <div className="bg-foreground/10 h-0.5 w-3/4 rounded-full" />
                        </div>
                        <div className="flex gap-1">
                            <div className="bg-foreground/10 h-0.5 w-1/3 rounded-full" />
                            <div className="bg-foreground/10 h-0.5 w-1/3 rounded-full" />
                            <div className="bg-foreground/10 h-0.5 w-1/3 rounded-full" />
                        </div>
                        <div className="bg-foreground/10 h-0.5 w-2/3 rounded-full" />

                        <div className="bg-foreground/10 h-0.5 w-3/4 rounded-full" />
                        <div className="border-foreground/10 mt-1.5 border-t pt-1.5">
                            <div className="flex justify-between">
                                <div className="bg-foreground/15 h-0.5 w-6 rounded-full" />
                                <div className="h-0.5 w-8 rounded-full bg-amber-500/50" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-26 relative z-10">
                    <div className="dark:bg-illustration/75 dark:ring-border-illustration relative flex size-14 items-center justify-center rounded-full bg-black/75 shadow-xl shadow-black/20 ring-1 ring-black backdrop-blur">
                        <LogoIcon className="size-5" />
                    </div>
                </div>

                <div className="w-32">
                    <div className="relative mx-auto w-fit">
                        <div className="absolute inset-0 opacity-50 dark:opacity-15">
                            <div className={`absolute inset-1 animate-pulse rounded-xl bg-gradient-to-r ${currentProvider.color} blur-md`} />
                        </div>
                        <motion.div
                            animate={{ width: containerWidth }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="ring-foreground/15 shadow-black/6.5 bg-radial to-card/50 from-card relative overflow-hidden rounded-xl shadow-md ring-1 backdrop-blur">
                            <div className="relative">
                                <div
                                    ref={contentRef}
                                    className="invisible absolute flex items-center gap-2 whitespace-nowrap py-2 pl-2 pr-3">
                                    <div className="size-8 shrink-0" />
                                    <div>
                                        <div className="text-xs font-semibold">{currentProvider.name}</div>
                                        <div className="text-foreground/65 text-[10px]">Postgres</div>
                                    </div>
                                </div>
                                <AnimatePresence
                                    initial={false}
                                    mode="popLayout">
                                    <motion.div
                                        key={activeProvider}
                                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)', y: -56 }}
                                        animate={{ opacity: 1, scale: 1, filter: 'blur(0)', y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(12px)', y: 56 }}
                                        transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                                        className="flex items-center gap-2 py-2 pl-2 pr-3">
                                        <div className={cn('inset-ring-1 dark:inset-ring-foreground/15 inset-ring-foreground/50 flex size-8 shrink-0 items-center justify-center rounded-lg *:size-4', currentProvider.iconBackground)}>{currentProvider.icon}</div>
                                        <div>
                                            <div className="text-xs font-semibold">{currentProvider.name}</div>
                                            <div className="text-foreground/65 text-[10px]">Postgres</div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Database Tables */}
                <div className="ml-32 flex flex-col gap-48">
                    <div className="bg-card/75 ring-border-illustration shadow-black/6.5 w-32 overflow-hidden rounded-xl shadow-md ring-1">
                        <div className="flex items-center justify-center px-3 py-1.5">
                            <span className="text-xs font-semibold">users</span>
                        </div>
                        <div className="bg-illustration border-border/50 space-y-1.5 border-t p-3">
                            <div className="flex items-center gap-1.5">
                                <div className="size-1 rounded-full bg-cyan-500" />
                                <span className="text-muted-foreground text-xs">id</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="size-1 rounded-full bg-cyan-500/50" />
                                <span className="text-muted-foreground text-xs">name</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="size-1 rounded-full bg-cyan-500/50" />
                                <span className="text-muted-foreground text-xs">email</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card/75 ring-border-illustration shadow-black/6.5 w-32 overflow-hidden rounded-xl shadow-md ring-1">
                        <div className="flex items-center justify-center px-3 py-1.5">
                            <span className="text-xs font-semibold">invoices</span>
                        </div>
                        <div className="bg-illustration border-border/50 space-y-1.5 border-t p-3">
                            <div className="flex items-center gap-1.5">
                                <div className="size-1 rounded-full bg-violet-500" />
                                <span className="text-muted-foreground text-xs">id</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="size-1 rounded-full bg-violet-500/50" />
                                <span className="text-muted-foreground text-xs">user_id</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="size-1 rounded-full bg-violet-500/50" />
                                <span className="text-muted-foreground text-xs">amount</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Flow12Illustration
