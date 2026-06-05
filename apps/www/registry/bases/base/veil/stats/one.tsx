export default function Stats() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">Trusted by Teams Worldwide</h2>
                    <p className="text-muted-foreground text-balance">Our platform delivers measurable results that help businesses scale faster and work smarter.</p>
                </div>
                <div className="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">99.9%</span> Uptime guarantee.
                        </p>
                    </div>

                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">10M+</span> API requests processed daily.
                        </p>
                    </div>

                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">500+</span> Enterprise customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
