import Image from 'next/image'
import { HeroHeader } from '@/registry/bases/radix/dusk/blocks/hero-section/six/header'
import { cn } from '@/registry/core/lib/utils'
import { Google } from '@/registry/core/ui/svgs/google'
import { Trustpilot } from '@/registry/core/ui/svgs/trustpilot'
import { G2 } from '@/registry/core/ui/svgs/g2'

type ProfileCardProps = {
    name: string
    alt: string
    imageSrc: string
    className?: string
    cardClassName?: string
    rightMaskClassName?: string
}

const ProfileCard = ({ name, alt, imageSrc, className, cardClassName, rightMaskClassName }: ProfileCardProps) => {
    return (
        <div
            aria-hidden
            className={cn('absolute inset-0 z-10 m-auto size-fit', className)}
        >
            <div className="border-foreground/25 mask-radial-from-bottom-left mask-radial-from-65% mask-radial-[100%_60%] absolute inset-y-0 left-0 z-10 aspect-video rounded-l-2xl border-l border-t" />
            <div className={cn('border-foreground/25 mask-radial-from-bottom-right mask-radial-from-65% mask-radial-[60%_100%] absolute inset-y-0 right-0 z-10 aspect-video rounded-r-2xl border-r border-t', rightMaskClassName)} />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-900/50 shadow-2xl shadow-black ring ring-black/50">
                <Image
                    src={imageSrc}
                    alt={alt}
                    width={120}
                    height={120}
                    className="absolute inset-0 my-auto size-fit blur"
                />
                <div className={cn('relative z-10 rounded-2xl p-2 pr-32 backdrop-blur dark:bg-zinc-900/80', cardClassName)}>
                    <div className="flex gap-2">
                        <div className="before:border-foreground/20 size-18 relative overflow-hidden rounded-xl shadow-md before:absolute before:inset-0 before:rounded-xl before:border">
                            <Image
                                src={imageSrc}
                                alt={alt}
                                width={136}
                                height={136}
                            />
                        </div>
                        <div className="py-1 pr-4">
                            <div className="text-sm font-medium">{name}</div>
                            <div className="mt-1.5 flex items-center gap-3">
                                <div>
                                    <div className="text-foreground/50 text-xs">Expenses</div>
                                    <div className="mt-0.5 text-sm font-semibold">$32.65k</div>
                                </div>
                                <div className="bg-border h-7 w-px" />
                                <div>
                                    <div className="text-foreground/50 text-xs">Income</div>
                                    <div className="mt-0.5 text-sm font-semibold">$2.65k</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main>
                <section className="pb-24 pt-40 md:pt-56">
                    <div className="relative mx-auto max-w-7xl px-6">
                        <div>
                            <h1 className="text-balance text-center text-4xl font-medium tracking-tight">
                                Family money, finally organized. <br /> <span className="text-muted-foreground">Plan budgets, bills, and savings together</span>
                            </h1>
                        </div>
                        <div className="sm:aspect-3/2 relative mx-auto mt-6 aspect-square max-w-4xl overflow-hidden">
                            <ProfileCard
                                name="Théo Balick"
                                alt="Théo's avatar"
                                imageSrc="https://avatars.githubusercontent.com/u/68236786?v=4"
                                className="scale-85 z-11"
                                cardClassName="bg-card/75"
                                rightMaskClassName="border-foreground/35"
                            />

                            <ProfileCard
                                name="Shadcn"
                                alt="Shadcn avatar"
                                imageSrc="https://avatars.githubusercontent.com/u/124599?v=4"
                                className="origin-top -translate-y-1 scale-75"
                                cardClassName="bg-white/90"
                            />

                            <Image
                                src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="background"
                                width={1280}
                                height={1000}
                                className="mask-x-from-80% mask-y-from-80% size-full object-cover max-sm:scale-150 dark:mix-blend-lighten"
                            />
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-muted-foreground text-center text-lg">Trusted by over 100,000 families</p>

                        <div className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-6">
                            <div className="flex items-center gap-2">
                                <Google className="size-5" />

                                <p className="text-foreground text-lg font-medium">
                                    <span>4.8</span> Google
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Trustpilot className="size-5" />

                                <p className="text-foreground text-lg font-medium">
                                    <span>4.6</span> Trustpilot
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <G2 className="size-5" />

                                <p className="text-foreground text-lg font-medium">
                                    <span>4.5</span> G2
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
