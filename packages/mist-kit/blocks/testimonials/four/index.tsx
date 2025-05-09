import { Avatar, AvatarFallback, AvatarImage } from '@tailark/core/ui/avatar'

export default function TestimonialSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <blockquote className="before:bg-primary relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                        <p className="text-foreground text-lg">Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>
                        <footer className="mt-4 flex items-center gap-2">
                            <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                <AvatarImage
                                    src="https://avatars.githubusercontent.com/u/68236786?v=4"
                                    alt="Théo Balick"
                                />
                                <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                            <cite>Théo Balick</cite>
                            <span
                                aria-hidden
                                className="bg-foreground/15 size-1 rounded-full"></span>
                            <span className="text-muted-foreground">Product Designer</span>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
