import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-12 px-6 md:space-y-16">
                <div className="aspect-video">
                    <Image
                        className="size-full rounded-xl object-cover grayscale"
                        src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="team image"
                        height="1080"
                        width="1920"
                        loading="lazy"
                    />
                </div>

                <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <h2 className="max-w-md text-balance text-4xl font-medium tracking-tight lg:text-5xl">A CRM workspace for every customer relationship.</h2>
                    <div className="space-y-6">
                        <p className="text-muted-foreground text-balance text-lg">Tailark keeps pipeline, conversations, tasks, and account history connected so teams can spot the next best move, follow up with context, and turn every customer signal into momentum.</p>

                        <p className="text-muted-foreground text-balance text-lg">Modern sales teams move faster when every account, conversation, and next step lives in one place. </p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5"
                        >
                            <Link href="#">
                                <span>Explore CRM</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
