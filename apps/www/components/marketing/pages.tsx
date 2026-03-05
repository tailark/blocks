'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@tailark/core/ui/button'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { ReactNode, RefObject, useRef } from 'react'
import { useMedia } from 'use-media'

export const PagesSection = () => {
    const isDesktop = useMedia('(min-width: 1024px)')

    return (
        <section
            id="pages"
            data-theme="global"
            className="relative py-32">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h2 className="text-foreground/55 mb-12 block font-mono text-sm tracking-wide">Pages</h2>

                <div className="mx-auto max-w-xl space-y-6">
                    <p className="text-foreground/55 text-balance text-3xl font-medium tracking-tight">
                        <span className="text-foreground">Complete pages.</span> In 4 distinct styles. With exclusive blocks and illustrations
                    </p>

                    <Button
                        asChild
                        variant="ghost"
                        size="sm">
                        <Link
                            href="/pages"
                            className="text-sm!">
                            Explore pages
                            <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="max-w-380 relative mx-auto mt-6 md:mt-12">
                <div className="relative space-y-4 px-4">
                    <div className="grid gap-4 *:overflow-hidden *:rounded-3xl *:border *:p-6 sm:*:p-12 lg:grid-cols-2 xl:*:p-24">
                        <div className="relative col-span-full bg-indigo-200">
                            <ContainerContent>
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-2-landing-one.png"
                                    alt="Tailark Pro dark landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div className="bg-indigo-200">
                            <ContainerContent className="xl:max-w-152">
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-2-customers-one.png"
                                    alt="Tailark Pro dark landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div className="bg-indigo-200">
                            <ContainerContent className="xl:max-w-152">
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-2-pricing-one.png"
                                    alt="Tailark Pro dark pricing page"
                                    width={936}
                                    height={1184}
                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                    </div>

                    {isDesktop && (
                        <ScrollAnimatedContainer>
                            {({ targetRef, scale, xPositive, xNegative }) => (
                                <div className="inset-ring inset-ring-foreground/6.5 relative overflow-hidden rounded-3xl bg-[#b7cbd7] px-6 pt-6 md:px-12 md:pt-12 xl:px-24 xl:pt-24">
                                    <div className="mask-t-from-0% z-11 absolute inset-0 mt-auto h-1/3 bg-white/25 backdrop-blur-2xl"></div>
                                    <div
                                        className="relative"
                                        ref={targetRef}>
                                        <motion.div
                                            style={{ x: xPositive, scale }}
                                            className="absolute top-32 origin-bottom will-change-transform">
                                            <ContainerContent className="max-w-152 shadow-2xl shadow-black/25">
                                                <Image
                                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-1-customers-one.png"
                                                    alt="Tailark Pro grid 1 customers page"
                                                    width={936}
                                                    height={1184}
                                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                                    className="rounded-xl object-cover object-top"
                                                />
                                            </ContainerContent>
                                        </motion.div>
                                        <motion.div
                                            style={{ x: xNegative, scale }}
                                            className="absolute bottom-0 right-0 z-10 origin-bottom will-change-transform">
                                            <ContainerContent className="aspect-20/35 max-w-88 shadow-2xl shadow-black/25">
                                                <Image
                                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-1-landing-one-mobile.png"
                                                    alt="Tailark Pro grid 1 mobile landing page"
                                                    width={936}
                                                    height={1184}
                                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                                    className="rounded-xl object-cover object-top"
                                                />
                                            </ContainerContent>
                                        </motion.div>
                                        <motion.div
                                            style={{ scale }}
                                            className="origin-bottom">
                                            <ContainerContent className="shadow-2xl shadow-black/25">
                                                <Image
                                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-1-landing-one.png"
                                                    alt="Tailark Pro grid 1 landing page"
                                                    width={936}
                                                    height={1184}
                                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                                    className="rounded-xl object-cover object-top"
                                                />
                                            </ContainerContent>
                                        </motion.div>
                                    </div>
                                </div>
                            )}
                        </ScrollAnimatedContainer>
                    )}

                    <div className="grid gap-4 *:overflow-hidden *:rounded-3xl *:border *:bg-[#b7cbd7] *:p-6 sm:*:p-12 lg:hidden xl:*:p-24">
                        <div>
                            <ContainerContent>
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-1-landing-one.png"
                                    alt="Tailark Pro grid-1 landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(min-width: 1024px) 0px, 100vw"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div>
                            <ContainerContent>
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-1-customers-one.png"
                                    alt="Tailark Pro grid-1 landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(min-width: 1024px) 0px, 100vw"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div>
                            <ContainerContent>
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/grid-1-pricing-one.png"
                                    alt="Tailark Pro grid-1 pricing page"
                                    width={936}
                                    height={1184}
                                    sizes="(min-width: 1024px) 0px, 100vw"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                    </div>

                    <div className="grid gap-4 *:overflow-hidden *:rounded-3xl *:border *:bg-neutral-300 *:p-6 sm:*:p-12 lg:grid-cols-2 xl:*:p-24">
                        <div className="relative col-span-full">
                            <ContainerContent>
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/libre-landing-one.png"
                                    alt="Tailark Pro dark landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div>
                            <ContainerContent className="xl:max-w-152">
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/libre-landing-two.png"
                                    alt="Tailark Pro dark landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div>
                            <ContainerContent className="xl:max-w-152">
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/libre-pricing-one.png"
                                    alt="Tailark Pro dark pricing page"
                                    width={936}
                                    height={1184}
                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                    </div>

                    {isDesktop && (
                        <ScrollAnimatedContainer>
                            {({ targetRef, scale, xPositive, xNegative }) => (
                                <motion.div className="bg-linear-to-b relative overflow-hidden rounded-3xl from-zinc-400 to-zinc-900 px-6 pt-6 md:px-12 md:pt-12 xl:px-24 xl:pt-24">
                                    <div
                                        aria-hidden
                                        className="border-foreground/6.5 z-12 absolute inset-0 rounded-3xl border"
                                    />
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-12 aspect-square -translate-y-2/3 rounded-full bg-white/50 blur-3xl"
                                    />
                                    <div
                                        aria-hidden
                                        className="mask-t-from-0% z-11 absolute inset-0 mt-auto h-1/3 bg-black/25 backdrop-blur-2xl"
                                    />
                                    <div
                                        className="relative"
                                        ref={targetRef}>
                                        <motion.div
                                            style={{ x: xPositive, scale }}
                                            className="absolute top-32 origin-bottom will-change-transform">
                                            <ContainerContent className="max-w-152 border bg-black">
                                                <Image
                                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/dark-customers-one.png"
                                                    alt="Tailark Pro dark customers page"
                                                    width={936}
                                                    height={1184}
                                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                                    className="rounded-xl object-cover object-top"
                                                />
                                            </ContainerContent>
                                        </motion.div>
                                        <motion.div
                                            style={{ x: xNegative, scale }}
                                            className="absolute bottom-0 right-0 z-10 origin-bottom will-change-transform">
                                            <ContainerContent className="aspect-20/35 max-w-88 bg-black">
                                                <Image
                                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/dark-landing-one-mobile.png"
                                                    alt="Tailark Pro dark mobile landing page"
                                                    width={936}
                                                    height={1184}
                                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                                    className="rounded-xl object-cover object-top"
                                                />
                                            </ContainerContent>
                                        </motion.div>
                                        <motion.div
                                            style={{ scale }}
                                            className="origin-bottom">
                                            <ContainerContent className="bg-black">
                                                <Image
                                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/dark-landing-one.png"
                                                    alt="Tailark Pro dark landing page"
                                                    width={936}
                                                    height={1184}
                                                    sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 720px"
                                                    className="rounded-xl object-cover object-top"
                                                />
                                            </ContainerContent>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </ScrollAnimatedContainer>
                    )}

                    <div className="grid gap-4 *:overflow-hidden *:rounded-3xl *:border *:bg-zinc-100 *:p-6 sm:*:p-12 lg:hidden xl:*:p-24">
                        <div>
                            <ContainerContent className="bg-black">
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/dark-landing-one.png"
                                    alt="Tailark Pro dark landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(min-width: 1024px) 0px, 100vw"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div>
                            <ContainerContent className="bg-black">
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/dark-customers-one.png"
                                    alt="Tailark Pro dark landing page"
                                    width={936}
                                    height={1184}
                                    sizes="(min-width: 1024px) 0px, 100vw"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                        <div>
                            <ContainerContent className="bg-black">
                                <Image
                                    src="https://raw.githubusercontent.com/tailark/pro-images/refs/heads/main/pages/dark-pricing-one.png"
                                    alt="Tailark Pro dark pricing page"
                                    width={936}
                                    height={1184}
                                    sizes="(min-width: 1024px) 0px, 100vw"
                                    className="rounded-xl object-cover object-top"
                                />
                            </ContainerContent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

type ScrollOffset = NonNullable<NonNullable<Parameters<typeof useScroll>[0]>['offset']>

type ScrollAnimatedContainerProps = {
    children: (animation: { targetRef: RefObject<HTMLDivElement | null>; scale: MotionValue<number>; xPositive: MotionValue<number>; xNegative: MotionValue<number> }) => ReactNode
    distance?: number
    scaleFrom?: number
    offset?: ScrollOffset
}

const defaultScrollOffset: ScrollOffset = ['start end', 'end start']

const ScrollAnimatedContainer = ({ children, distance = 96, scaleFrom = 0.9, offset = defaultScrollOffset }: ScrollAnimatedContainerProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset,
    })

    const xPositive = useTransform(scrollYProgress, [0, 1], [distance, 0])
    const xNegative = useTransform(scrollYProgress, [0, 1], [-distance, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom, 1])

    return children({ targetRef, scale, xPositive, xNegative })
}

const ContainerContent = ({ children, className }: { children: ReactNode; className?: string }) => <div className={cn('aspect-4/5 *:border-border/50 shadow-black/6 relative mx-auto max-w-2xl rounded-2xl bg-white p-1.5 shadow-2xl ring ring-black/5 *:h-full *:rounded-[10px] *:border-[0.5px]', className)}>{children}</div>
