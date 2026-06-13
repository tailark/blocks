import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialSection() {
    return (
        <section>
            <div className="bg-muted py-24">
                <div className="mx-auto w-full max-w-2xl px-6 text-center">
                    <div className="max-w-xl">
                        <Quote className="fill-background stroke-background mx-auto size-8 drop-shadow-sm" />
                        <blockquote className="mt-6">
                            <p className="text-foreground text-xl">Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>
                            <footer className="mt-6 flex flex-col items-center justify-center">
                                <div className="rounded-(--radius) ring-foreground/10 size-12 border border-transparent shadow ring">
                                    <Image
                                        src="https://avatars.githubusercontent.com/u/68236786?v=4"
                                        alt="Théo Balick"
                                        width={56}
                                        height={56}
                                        className="rounded-(--radius)"
                                    />
                                </div>
                                <cite className="text-foreground mt-2 text-lg font-medium">Théo Balick</cite>
                                <span className="text-muted-foreground">@theo_b</span>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
