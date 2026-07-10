import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/registry/bases/radix/dusk/ui/button'

const members = [
    {
        name: 'Marcus Chen',
        role: 'Head of Product',
        avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Sofia Ramirez',
        role: 'Revenue Operations Lead',
        avatar: 'https://images.unsplash.com/photo-1633625763717-045645e9e739?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Ethan Brooks',
        role: 'Founder & CEO',
        avatar: 'https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Maya Patel',
        role: 'Customer Success Manager',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Nora Williams',
        role: 'Product Designer',
        avatar: 'https://images.unsplash.com/photo-1605661107759-587d4bfdf168?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Daniel Kim',
        role: 'Co-Founder & CTO',
        avatar: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Julian Parker',
        role: 'Staff Software Engineer',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Noah Wilson',
        role: 'Sales Engineering Lead',
        avatar: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function TeamSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <span className="text-muted-foreground block text-sm">Team</span>
                    <span className="bg-border h-px w-full" />
                </div>
                <div className="mt-12 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <div className="sm:w-2/5">
                        <h2 className="text-4xl font-medium tracking-tight">Our dream team</h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-muted-foreground text-lg">During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                        <Button
                            asChild
                            variant="outline"
                        >
                            <Link href="#">See pending roles</Link>
                        </Button>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group"
                            >
                                <div className="aspect-square overflow-hidden transition-all duration-200 [clip-path:inset(0_0_0_0_round_12px)] group-hover:[clip-path:inset(0_0_4px_0_round_16px)]">
                                    <Image
                                        className="size-full object-cover object-top grayscale"
                                        src={member.avatar}
                                        alt="team member"
                                        width="826"
                                        height="1239"
                                        sizes="(max-width: 768px) 100vw, 280px"
                                    />
                                </div>
                                <div className="pt-3">
                                    <h3 className="font-medium">{member.name}</h3>
                                    <p className="text-muted-foreground inline-block text-sm">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
