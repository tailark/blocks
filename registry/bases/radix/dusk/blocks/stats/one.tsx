export default function StatsSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        <span className="text-foreground">Close more deals.</span> <br /> Know every customer.
                    </h2>
                    <div className="flex flex-col gap-32 md:mx-auto xl:gap-44">
                        <p className="text-muted-foreground text-balance text-lg">Modern sales teams move faster when every account, conversation, and next step lives in one place. Tailark brings pipeline, outreach, and customer history into a focused CRM workspace where reps can spot momentum, prioritize follow-up, and turn relationships into revenue. </p>

                        <div className="grid gap-12 md:grid-cols-3 md:gap-12">
                            <div className="space-y-3 border-t pt-6">
                                <div className="text-4xl font-semibold tracking-tight">21k</div>
                                <p className="text-muted-foreground">Deals tracked</p>
                            </div>
                            <div className="space-y-3 border-t pt-6">
                                <div className="text-4xl font-semibold tracking-tight">22m</div>
                                <p className="text-muted-foreground">Customer signals</p>
                            </div>
                            <div className="space-y-3 border-t pt-6">
                                <div className="text-4xl font-semibold tracking-tight">+500</div>
                                <p className="text-muted-foreground">Sales teams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
