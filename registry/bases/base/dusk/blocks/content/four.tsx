import { ArrowLeftRight, Bell, LineChart, Users } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <h2 className="max-w-md text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-muted-foreground">Customer context.</span> <br /> Survives every handoff.
                    </h2>
                    <div className="space-y-4">
                        <p className="text-muted-foreground text-balance text-lg">Deals rarely stay with one person. When accounts move from sales to success, or from one rep to another, context usually gets lost in inboxes and spreadsheets.</p>
                        <p className="text-muted-foreground text-balance text-lg">Tailark keeps notes, commitments, and open tasks attached to the account so the next owner picks up with full history — not a cold restart.</p>

                        <div className="*:not-last:pb-3 *:not-last:border-b mt-20 flex flex-col gap-3 pt-6">
                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <ArrowLeftRight className="inline size-4 -translate-y-0.5" /> Seamless handoffs.
                                </span>{' '}
                                Ownership changes without resetting the relationship.
                            </p>

                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <Bell className="inline size-4 -translate-y-0.5" /> Proactive alerts.
                                </span>{' '}
                                Surface renewals and quiet accounts before they slip.
                            </p>

                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <Users className="inline size-4 -translate-y-0.5" /> Shared timeline.
                                </span>{' '}
                                Sales, success, and support work from one account view.
                            </p>

                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <LineChart className="inline size-4 -translate-y-0.5" /> Forecast clarity.
                                </span>{' '}
                                Leaders see risk and momentum without chasing updates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
