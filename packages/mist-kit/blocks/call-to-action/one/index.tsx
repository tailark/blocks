import { Button } from '@mist/components/ui/button'
import Link from 'next/link'

export default function StatsSection() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">Build 10x Faster with Mist</h2>
                        <div className="flex justify-center gap-3">
                            <Button
                                asChild
                                size="lg">
                                <Link href="#">Get Started</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg">
                                <Link href="#">Get a Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
