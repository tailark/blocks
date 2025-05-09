import { Avatar, AvatarFallback, AvatarImage } from '@tailark/core/ui/avatar'

export default function TestimonialSection() {
    const testimonials = [
        {
            name: 'Méschac Irung',
            role: 'Creator',
            avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
            content: "Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility.",
        },
        {
            name: 'Théo Balick',
            role: 'Frontend Dev',
            avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
            content: 'Tailark has transformed the way I develop web applications. The flexibility to customize every aspect is amazing.',
        },
        {
            name: 'Glodie Lukose',
            role: 'Frontend Dev',
            avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4',
            content: 'The extensive collection of UI components has significantly accelerated my workflow. Tailark is a game-changer.',
        },
    ]

    return (
        <section>
            <div className="bg-muted py-24">
                <div className="@container mx-auto w-full max-w-5xl px-6">
                    <div className="mb-12">
                        <h2 className="text-foreground text-4xl font-semibold">What Our Clients Say</h2>
                        <p className="text-muted-foreground my-4 text-balance text-lg">Discover why our clients love working with us. Read their testimonials about our dedication to excellence, innovative solutions, and exceptional customer service.</p>
                    </div>
                    <div className="@lg:grid-cols-2 @3xl:grid-cols-3 grid gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <div className="bg-background ring-foreground/10 rounded-2xl rounded-bl border border-transparent px-4 py-3 ring-1">
                                    <p className="text-foreground">{testimonial.content}</p>
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                        <AvatarImage
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                        />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-foreground text-sm font-medium">{testimonial.name}</div>
                                    <span
                                        aria-hidden
                                        className="bg-foreground/25 size-1 rounded-full"></span>
                                    <span className="text-muted-foreground text-sm">{testimonial.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
