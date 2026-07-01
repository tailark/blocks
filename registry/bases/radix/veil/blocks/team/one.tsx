import Image from 'next/image'

const members = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
        name: 'Meschac Irung',
        role: 'Frontend Engineer at Acme',
        bio: 'Passionate about intuitive UIs and web performance. Specializes in React and TypeScript with 5+ years of experience.',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
        name: 'Theo Balick',
        role: 'Founder, CEO - Acme',
        bio: 'Serial entrepreneur transforming team collaboration. Previously led product at two successful startups.',
    },
]

export default function Team() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">Meet Our Founders</h2>
                    <p className="text-muted-foreground text-balance">The visionary leaders behind our mission to transform how teams work and collaborate.</p>
                </div>
                <div className="mt-12 grid gap-12 text-sm">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="relative grid grid-cols-[auto_1fr] gap-4"
                        >
                            <div
                                aria-hidden
                                className="max-h-26 absolute -inset-x-6 inset-y-1 border-y"
                            />
                            <div
                                aria-hidden
                                className="w-26 absolute -inset-y-6 inset-x-1 border-x"
                            />
                            <div className="before:border-foreground/10 shadow-foreground/6.5 dark:shadow-black/6.5 relative size-28 shrink-0 rounded-xl shadow-md before:absolute before:inset-0 before:rounded-xl before:border">
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    className="rounded-xl object-cover"
                                    width={120}
                                    height={120}
                                />
                            </div>

                            <div className="flex flex-col justify-between gap-6 py-1">
                                <div className="space-y-0.5">
                                    <p className="text-foreground text-base font-medium">{member.name}</p>
                                    <p className="text-muted-foreground text-sm">{member.role}</p>
                                </div>

                                <p className="text-muted-foreground text-balance text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
