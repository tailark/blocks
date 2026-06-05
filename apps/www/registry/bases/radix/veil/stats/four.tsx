import Image from 'next/image'

export default function Stats() {
    return (
        <section className="bg-background @container relative border-b pt-24 sm:pb-24">
            <div className="@2xl:grid-cols-2 mx-auto grid max-w-2xl px-6">
                <div>
                    <div className="space-y-4">
                        <h2 className="text-balance font-serif text-4xl font-medium">Trusted by Teams Worldwide</h2>
                        <p className="text-muted-foreground text-balance">Our platform delivers measurable results that help businesses scale faster and work smarter.</p>
                    </div>
                    <div className="mt-12 grid text-sm">
                        <div className="border-t py-6">
                            <p className="text-muted-foreground text-xl">
                                <span className="text-foreground font-medium">99.9%</span> Uptime guarantee.
                            </p>
                        </div>

                        <div className="border-t py-6">
                            <p className="text-muted-foreground text-xl">
                                <span className="text-foreground font-medium">10M+</span> API requests processed daily.
                            </p>
                        </div>

                        <div className="border-t py-6">
                            <p className="text-muted-foreground text-xl">
                                <span className="text-foreground font-medium">500+</span> Enterprise customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                aria-hidden
                className="mask-radial-from-65% mask-radial-at-bottom mask-radial-[50%_100%] sm:min-w-6xl pointer-events-none relative sm:absolute sm:bottom-0 sm:left-1/2 sm:right-0 dark:opacity-50">
                <div className="bg-primary absolute inset-0 z-10 mix-blend-overlay" />
                <Image
                    src="https://images.unsplash.com/photo-1723307060937-b003478a2c03?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="globe with world map"
                    className="dark:invert"
                    width={2928}
                    height={1464}
                />
            </div>
        </section>
    )
}
