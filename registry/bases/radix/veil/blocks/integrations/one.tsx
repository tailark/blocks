import { ChevronRight } from 'lucide-react'
import { Vercel } from '@/registry/core/ui/svgs/vercel'
import { Supabase } from '@/registry/core/ui/svgs/supabase'
import { Linear } from '@/registry/core/ui/svgs/linear'
import { Slack } from '@/registry/core/ui/svgs/slack'
import { Firebase } from '@/registry/core/ui/svgs/firebase'
import { ClerkIconDark as Clerk } from '@/registry/core/ui/svgs/clerk'
import { Logo } from '@/registry/bases/radix/veil/ui/logo'

import { Button } from '@/registry/bases/radix/veil/ui/button'
import Link from 'next/link'

export default function Integrations() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <IntegrationsIllustration />
                <div className="mx-auto mt-12 max-w-md text-balance text-center">
                    <h2 className="font-serif text-4xl font-medium">Connect Your Favorite Tools</h2>
                    <p className="text-muted-foreground mb-6 mt-4">Seamlessly integrate with the services you already use. Set up in minutes, not days.</p>
                    <Button
                        variant="secondary"
                        size="sm"
                        asChild
                        className="gap-1 pr-1.5"
                    >
                        <Link href="#">
                            Learn more
                            <ChevronRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

const IntegrationsIllustration = () => {
    return (
        <div
            aria-hidden
            className="**:fill-foreground mx-auto flex h-44 max-w-lg flex-col justify-between"
        >
            <div className="@lg:px-6 relative flex h-10 items-center justify-between gap-12">
                <div className="bg-border absolute inset-0 my-auto h-px"></div>

                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                    <Vercel className="size-3.5" />
                </div>
                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                    <Slack className="size-3.5" />
                </div>
            </div>
            <div className="@lg:px-24 relative flex h-10 items-center justify-between px-12">
                <div className="bg-border absolute inset-0 my-auto h-px"></div>
                <div className="bg-linear-to-r mask-l-from-15% mask-l-to-40% mask-r-from-75% mask-r-to-75% from-primary absolute inset-0 my-auto h-px w-1/2 via-amber-500 to-pink-400"></div>
                <div className="bg-linear-to-r mask-r-from-15% mask-r-to-40% mask-l-from-75% mask-l-to-75% absolute inset-0 my-auto ml-auto h-px w-1/2 from-indigo-500 via-emerald-500 to-blue-400"></div>

                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                    <Clerk className="size-3.5" />
                </div>
                <div className="border-foreground/15 rounded-full border border-dashed p-2">
                    <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                        <Logo className="h-4" />
                    </div>
                </div>
                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                    <Linear className="size-3.5" />
                </div>
            </div>
            <div className="@lg:px-6 relative flex h-10 items-center justify-between gap-12">
                <div className="bg-border absolute inset-0 my-auto h-px"></div>

                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                    <Supabase className="size-3.5" />
                </div>
                <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
                    <Firebase className="size-3.5" />
                </div>
            </div>
        </div>
    )
}
