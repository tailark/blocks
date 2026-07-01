import Image from 'next/image'

const members = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
        name: 'Meschac Irung',
        role: 'Frontend Engineer at Acme',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
        name: 'Theo Balick',
        role: 'Founder, CEO - Acme',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
        name: 'Sarah Johnson',
        role: 'DevOps Engineer',
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
                <div className="@xl:grid-cols-3 @xl:gap-6 mt-12 grid grid-cols-2 gap-3 gap-y-6 text-sm">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4"
                        >
                            <div className="before:border-foreground/10 shadow-foreground/6.5 dark:shadow-black/6.5 relative size-28 shrink-0 rounded-xl shadow-md before:absolute before:inset-0 before:rounded-xl before:border">
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    className="rounded-xl object-cover"
                                    width={120}
                                    height={120}
                                />
                            </div>

                            <div className="space-y-1">
                                <p className="text-foreground text-sm font-medium">{member.name}</p>
                                <p className="text-muted-foreground text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
