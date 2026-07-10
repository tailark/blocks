import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="overflow-hidden py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <div className="max-w-2xl max-lg:pr-6">
                    <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">Workspace for every customer relationship.</h2>
                </div>
                <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-20">
                    <div className="mask-b-from-foreground relative max-lg:-mr-6 lg:col-span-2">
                        <div className="relative overflow-hidden p-px max-sm:-mr-56">
                            <div className="bg-background ring-foreground/6.5 before:mask-radial-at-top-left before:mask-radial-from-65% before:mask-radial-[100%_60%] before:ring-foreground before:border-foreground/10 relative rounded-2xl p-2 shadow-xl shadow-black/50 ring before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-l before:border-t">
                                <div className="bg-foreground/2 z-1 absolute inset-0 rounded-2xl" />
                                <Image
                                    className="bg-background aspect-15/8 relative rounded-2xl"
                                    src="/mail2.png"
                                    alt="app screen"
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground text-balance text-2xl">Tailark keeps pipeline, conversations, tasks, and account history connected so teams can spot the next best move.</p>

                        <div className="grid gap-4 pt-6 sm:grid-cols-2">
                            <p className="text-muted-foreground text-balance">
                                <span className="text-foreground font-medium">
                                    <Zap className="inline size-4 -translate-y-0.5" /> Fast.
                                </span>{' '}
                                Move from signal to follow-up without losing context.
                            </p>

                            <p className="text-muted-foreground text-balance">
                                <span className="text-foreground font-medium">
                                    <Cpu className="inline size-4 -translate-y-0.5" /> Powerful.
                                </span>{' '}
                                Unify pipeline, tasks, and account history.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
