import { Button } from '@/registry/bases/base/mist/ui/button'
import { Calendar, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section>
            <div className="bg-muted py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
                        <span className="text-muted-foreground">Build Modern Websites.</span> Drive Results
                    </h2>
                    <p className="mt-4 text-lg">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                    <div className="mt-8 flex gap-3">
                        <Button
                            nativeButton={false}
                            render={
                                <Link href="#">
                                    Try Mist for Free{' '}
                                    <ChevronRight
                                        strokeWidth={2.5}
                                        className="size-3.5! opacity-50"
                                    />
                                </Link>
                            }
                            className="pr-2"
                        />

                        <Button
                            nativeButton={false}
                            render={
                                <Link href="#">
                                    <Calendar
                                        className="size-3.5! opacity-50"
                                        strokeWidth={2.5}
                                    />
                                    Request a Demo
                                </Link>
                            }
                            className="pl-2.5"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
