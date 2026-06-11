import Link from 'next/link'
import { Button } from '@/registry/bases/base/veil/ui/button'
import { ChevronRight } from 'lucide-react'

export default function CallToAction() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Ready to Get Started?</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Join thousands of teams already using our platform to build better products faster.</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Button
                            nativeButton={false}
                            render={
                                <Link href="#link">
                                    <span>Start Free Trial</span>
                                    <ChevronRight className="opacity-50" />
                                </Link>
                            }
                            className="pr-1.5"
                        />
                        <Button
                            nativeButton={false}
                            variant="secondary"
                            render={<Link href="#link">Talk to Sales</Link>}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
