import Image from 'next/image'

export default function Testimonials() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="relative pl-6">
                    <div className="bg-primary absolute inset-0 w-0.5 rounded-full"></div>
                    <p className="text-foreground text-balance text-xl">Tailark has been a game-changer for our team. It has helped us to build a modern and scalable web application.</p>

                    <div className="mt-8 flex items-center gap-3">
                        <div className="before:border-foreground/10 relative size-10 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                            <Image
                                src="https://avatars.githubusercontent.com/u/68236786?v=4"
                                alt="Theo Balick"
                                className="rounded-full object-cover"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-muted-foreground text-sm font-medium">Théo Balick</p>
                            <p className="text-muted-foreground text-xs">Founder, CEO - Acme</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
