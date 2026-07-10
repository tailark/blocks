export default function StatsSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <p className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                    <span className="text-foreground">Scale with confidence.</span> Handle thousands of transactions per second.
                </p>

                <div className="mt-32 grid gap-12 md:grid-cols-3 xl:mt-44">
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight">+21200</div>
                        <p className="text-muted-foreground">Stars on GitHub</p>
                    </div>
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight">22 Million</div>
                        <p className="text-muted-foreground">Active Users</p>
                    </div>
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight">+500</div>
                        <p className="text-muted-foreground">Powered Apps</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
