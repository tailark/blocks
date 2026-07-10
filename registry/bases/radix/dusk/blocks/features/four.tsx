import { Card } from '@/registry/bases/radix/dusk/ui/card'
import Image from 'next/image'

export default function Features() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">Handoffs without reset.</span> <br /> Trust and context carry forward.
                </h2>
                <div className="mt-8 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card className="aspect-3/2 after:border-foreground/5 relative overflow-hidden ring-0 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border">
                            <div className="relative z-10 max-w-md p-8">
                                <p className="text-foreground/75 text-balance text-lg">
                                    <span className="text-foreground font-medium">Seamless handoffs. </span> Ownership changes without resetting the relationship.
                                </p>
                            </div>

                            <Image
                                src="https://images.unsplash.com/photo-1630893795974-f4e2fa294391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="hand with an apple watch"
                                width={800}
                                height={800}
                                className="absolute inset-0 size-full object-cover object-[50%_85%] opacity-50"
                            />
                        </Card>
                    </div>

                    <Card className="relative h-full min-h-96 overflow-hidden bg-zinc-100">
                        <div className="relative z-10 max-w-sm p-8">
                            <p className="text-balance text-lg text-zinc-950/75 selection:bg-zinc-950 selection:text-white">
                                <span className="font-medium text-zinc-950">Proactive alerts. </span> Surface renewals and quiet accounts before they slip.
                            </p>
                        </div>
                        <DynamicIslandIllustration />
                    </Card>
                </div>
            </div>
        </section>
    )
}

function DynamicIslandIllustration() {
    return (
        <div
            aria-hidden
            className="z-1 bg-black/2.5 mask-b-from-90% absolute inset-x-8 bottom-0 mx-auto mt-auto h-2/3 w-10/12 origin-bottom scale-95 rounded-t-[4rem] border border-black/5 px-4 pt-4"
        >
            <div className="shadow-black/6.5 h-full overflow-hidden rounded-t-[3rem] bg-white p-3 shadow-xl ring ring-black/10">
                <div className="relative">
                    <Image
                        src="https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Théo Balick"
                        width={500}
                        height={500}
                        className="absolute inset-0 top-0 size-full object-cover opacity-45 blur-xl contrast-200"
                    />
                    <div className="shadow-black/6.5 relative rounded-[2.25rem] bg-white p-2 shadow-xl ring ring-black/10">
                        <div className="flex gap-2">
                            <div className="size-18 relative overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20">
                                <Image
                                    src="https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Théo Balick"
                                    width={136}
                                    height={136}
                                />
                            </div>
                            <div className="py-1 pr-4">
                                <div className="text-sm font-medium text-black">Théo Balick</div>
                                <div className="mt-1.5 flex items-center gap-3">
                                    <div>
                                        <div className="text-xs text-black/50">Expenses</div>
                                        <div className="mt-0.5 text-sm font-semibold text-black">$32.65k</div>
                                    </div>
                                    <div className="bg-border h-7 w-px" />
                                    <div>
                                        <div className="text-xs text-black/50">Income</div>
                                        <div className="mt-0.5 text-sm font-semibold text-black">$2.65k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
