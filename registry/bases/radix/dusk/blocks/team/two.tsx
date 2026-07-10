import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                        <span className="text-foreground">Built by operators.</span> <br /> Designed for revenue teams.
                    </h2>
                    <div className="flex flex-col gap-32 md:mx-auto xl:gap-44">
                        <p className="text-muted-foreground text-balance text-lg">&quot;We have led sales, success, and product teams through messy handoffs and scattered customer data. Tailark is the CRM we wanted then: one clear workspace for pipeline health, account history, next steps, and the signals that help teams move deals forward.&quot; </p>

                        <div className="grid grid-cols-[auto_1fr] items-center gap-7">
                            <div className="relative">
                                <div className="before:border-foreground/10 before:z-1 relative size-10 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image
                                        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="team member"
                                        width={52}
                                        height={52}
                                        className="size-full object-cover grayscale"
                                    />
                                </div>

                                <div className="before:border-foreground/10 before:z-2 z-1 shadow-black/6 absolute inset-0 size-10 -translate-y-1/2 translate-x-1/2 overflow-hidden rounded-full shadow-lg before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="team member"
                                        width={52}
                                        height={52}
                                        className="size-full object-cover object-top grayscale"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium">Ethan Brooks and Daniel Kim</h3>
                                <p className="text-muted-foreground text-sm">Co-founders, Tailark CRM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
