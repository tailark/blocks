import { Spotify } from '@tailark/core/components/logos/spotify'

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl">
                    <blockquote>
                        <p className="text-lg font-semibold sm:text-xl md:text-3xl">Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                        <div className="mt-12 flex items-center gap-6">
                            <Spotify
                                height={24}
                                width={80}
                                className="*:fill-foreground"
                            />
                            <div className="space-y-1 border-l pl-6">
                                <cite className="font-medium">John Doe</cite>
                                <span className="text-muted-foreground block text-sm">CEO, Spotify</span>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
