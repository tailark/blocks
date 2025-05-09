import { cn } from '@tailark/core/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@tailark/core/ui/avatar'
import { Star } from 'lucide-react'

export default function TestimonialSection() {
    const testimonials = [
        {
            name: 'Méschac Irung',
            role: 'Creator',
            stars: 5,
            avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
            content: "Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity.",
        },
        {
            name: 'Théo Balick',
            role: 'Frontend Dev',
            stars: 4,
            avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
            content: 'Tailark has transformed the way I develop web applications. The flexibility to customize every aspect is amazing.',
        },
        {
            name: 'Glodie Lukose',
            role: 'Frontend Dev',
            stars: 5,
            avatar: 'https://avatars.githubusercontent.com/u/99137927?v=4',
            content: 'The extensive collection of UI components has significantly accelerated my workflow.',
        },
    ]

    return (
        <section>
            <div className="py-24">
                <div className="@container mx-auto w-full max-w-5xl px-6">
                    <div className="@lg:grid-cols-2 @3xl:grid-cols-3 @3xl:gap-12 grid gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn('size-4', i < testimonial.stars ? 'fill-primary stroke-primary' : 'fill-foreground/15 stroke-transparent')}
                                        />
                                    ))}
                                </div>
                                <p className="text-foreground my-4">{testimonial.content}</p>
                                <div className="flex items-center gap-2">
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
