import { Card } from '@/registry/bases/radix/dusk/ui/card'
import { ArrowLeftRight, Bell, LineChart, Users } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">Every deal, one view.</span> <br /> Stages and owners in one place.
                </h2>
                <div className="*:bg-background mt-8 grid gap-3 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="p-8">
                        <p className="text-muted-foreground max-w-xs text-lg font-medium">
                            <span className="text-foreground">One pipeline view.</span> See every deal stage, owner, and next step without switching tabs.
                        </p>

                        <div className="my-16">
                            <div
                                aria-hidden
                                className="bg-background relative mx-auto aspect-square w-10/12 rounded-xl border"
                            >
                                <div className="bg-card ring-foreground/6.5 absolute bottom-0 right-0 aspect-square w-3/5 translate-x-8 translate-y-16 rounded-xl shadow-xl ring" />
                            </div>
                        </div>
                    </Card>
                    <Card className="lg:col-span-2">
                        <div className="p-8">
                            <p className="text-muted-foreground max-w-xs text-lg font-medium">
                                <span className="text-foreground">Customer signals in context.</span> Notes, emails, and tasks stay linked to the account — not scattered across tools.
                            </p>
                        </div>

                        <div className="mask-x-from-65% mt-6 pt-2">
                            <div
                                aria-hidden
                                className="bg-linear-to-b from-foreground/5 ring-foreground/6.5 relative h-72 rounded-xl shadow-xl ring"
                            ></div>
                        </div>
                    </Card>
                </div>

                <div className="max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 mt-12 grid gap-3 *:max-w-xs sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <ArrowLeftRight className="inline size-4 -translate-y-0.5" /> Pipeline visibility.
                        </span>{' '}
                        See every open deal and stage in one workspace.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Bell className="inline size-4 -translate-y-0.5" /> Account history.
                        </span>{' '}
                        Every email, note, and task stays on the record.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <Users className="inline size-4 -translate-y-0.5" /> Team alignment.
                        </span>{' '}
                        Reps and managers work from shared customer context.
                    </p>

                    <p className="text-muted-foreground text-balance">
                        <span className="text-foreground font-medium">
                            <LineChart className="inline size-4 -translate-y-0.5" /> Forecast health.
                        </span>{' '}
                        Spot risk and momentum before the quarter slips away.
                    </p>
                </div>
            </div>
        </section>
    )
}
