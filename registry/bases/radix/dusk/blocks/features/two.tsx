import { Card } from '@/registry/bases/radix/dusk/ui/card'
import { ArrowLeftRight, Bell, LineChart, Users } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">Revenue, aligned.</span> <br /> One timeline per customer.
                </h2>
                <div className="*:bg-background mt-8 grid gap-3 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="p-8">
                        <p className="text-muted-foreground max-w-xs text-lg font-medium">
                            <span className="text-foreground">Account ownership, clarified.</span> Know who owns each relationship and what happened last.
                        </p>

                        <div className="my-16">
                            <div
                                aria-hidden
                                className="relative mx-auto aspect-square w-10/12"
                            >
                                <div className="mask-b-from-75% absolute inset-0">
                                    <div className="bg-background h-full rounded-xl border"></div>
                                </div>
                                <div className="bg-card ring-foreground/6.5 absolute bottom-0 right-0 aspect-square w-3/5 translate-x-8 translate-y-16 rounded-xl shadow-xl shadow-black/5 ring" />
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="p-8">
                            <p className="text-muted-foreground max-w-xs text-lg font-medium">
                                <span className="text-foreground">Follow-up without friction.</span> Tasks and reminders tied to real deal momentum, not busywork.
                            </p>
                        </div>

                        <div className="mask-x-from-65% relative mt-6 pt-2">
                            <div
                                aria-hidden
                                className="bg-linear-to-b from-card to background ring-foreground/6.5 relative h-72 rounded-xl shadow-xl ring"
                            ></div>
                        </div>
                    </Card>
                    <Card className="p-8">
                        <p className="text-muted-foreground max-w-xs text-lg font-medium">
                            <span className="text-foreground">Revenue teams aligned.</span> Sales and success share one timeline per customer, from first touch to renewal.
                        </p>

                        <div className="mask-b-from-75% mt-16">
                            <div
                                aria-hidden
                                className="bg-background relative mx-auto flex aspect-square flex-col justify-between rounded-xl border pb-6"
                            >
                                <div className="flex gap-1 border-b p-3">
                                    <div className="bg-foreground/10 size-1 rounded-full"></div>
                                    <div className="bg-foreground/10 size-1 rounded-full"></div>
                                    <div className="bg-foreground/10 size-1 rounded-full"></div>
                                </div>

                                <div className="bg-card ring-foreground/6.5 mx-6 mt-auto aspect-video rounded-xl shadow-xl ring" />
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 mt-12 grid gap-3 *:max-w-xs sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <ArrowLeftRight className="inline size-4 -translate-y-0.5" /> Lead routing.
                        </span>{' '}
                        Assign new accounts to the right owner automatically.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Bell className="inline size-4 -translate-y-0.5" /> Activity tracking.
                        </span>{' '}
                        Log calls, emails, and meetings without extra admin steps.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Users className="inline size-4 -translate-y-0.5" /> Renewal visibility.
                        </span>{' '}
                        Expansion and churn signals surface before contracts lapse.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <LineChart className="inline size-4 -translate-y-0.5" /> Rep focus.
                        </span>{' '}
                        Less time updating the CRM, more time with customers.
                    </p>
                </div>
            </div>
        </section>
    )
}
