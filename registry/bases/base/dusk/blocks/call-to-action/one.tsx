import { Button } from '@/registry/bases/base/dusk/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-5xl xl:text-6xl">Build Software businesses can rely on</h2>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button
                            size="lg"
                            nativeButton={false}
                            render={<Link href="#">Get Started</Link>}
                        />

                        <Button
                            size="lg"
                            variant="outline"
                            nativeButton={false}
                            render={<Link href="#">Get a Demo</Link>}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
