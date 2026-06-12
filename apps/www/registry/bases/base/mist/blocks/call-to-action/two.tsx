import { Button } from '@/registry/bases/base/mist/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">Build 10x Faster with Mist</h2>
                        </div>
                        <div className="flex justify-end gap-3">
                            <Button
                                nativeButton={false}
                                render={<Link href="#">Get a Demo</Link>}
                                variant="outline"
                                size="lg"
                            />
                            <Button
                                nativeButton={false}
                                render={<Link href="#">Get Started</Link>}
                                size="lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
