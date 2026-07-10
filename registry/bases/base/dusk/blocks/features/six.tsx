import { Bell, LineChart, Users, ArrowLeftRight } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-12 px-6">
                <h2 className="text-muted-foreground relative z-10 max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">Your stack, connected.</span> <br /> Git sync or AI agents, your way.
                </h2>
                <div className="relative -mx-6 overflow-hidden px-3 pt-3 md:-mx-8">
                    <div className="mask-radial-at-top-left mask-radial-from-65% mask-radial-[100%_60%] z-1 absolute inset-3 size-64 rounded-tl-3xl border-l border-t md:size-96 lg:inset-4"></div>
                    <div className="min-w-2xl aspect-88/36 mask-b-from-75% mask-b-to-95% relative">
                        <Image
                            src="/mail-upper.png"
                            className="absolute inset-0 z-10"
                            alt="payments illustration"
                            width={2797}
                            height={1137}
                        />
                        <Image
                            src="/mail-back.png"
                            alt="payments illustration"
                            width={2797}
                            height={1137}
                            className="opacity-75"
                        />
                    </div>
                </div>
                <div className="max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 mt-12 grid gap-3 *:max-w-xs sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <ArrowLeftRight className="inline size-4 -translate-y-0.5" /> Seamless handoffs.
                        </span>{' '}
                        Ownership changes without resetting the relationship.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Bell className="inline size-4 -translate-y-0.5" /> Proactive alerts.
                        </span>{' '}
                        Surface renewals and quiet accounts before they slip.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Users className="inline size-4 -translate-y-0.5" /> Shared timeline.
                        </span>{' '}
                        Sales, success, and support work from one account view.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <LineChart className="inline size-4 -translate-y-0.5" /> Forecast clarity.
                        </span>{' '}
                        Leaders see risk and momentum without chasing updates.
                    </p>
                </div>
            </div>
        </section>
    )
}
