import { Button } from '@/registry/bases/radix/dusk/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-center gap-6 max-lg:flex-col max-lg:text-center lg:items-end lg:justify-between">
                    <h2 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight xl:text-6xl">Start building from here</h2>

                    <Button
                        asChild
                        size="lg"
                    >
                        <Link href="#">Get Started</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
