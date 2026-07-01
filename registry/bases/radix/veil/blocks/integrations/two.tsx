import { ChevronRight } from 'lucide-react'
import { Vercel } from '@/registry/core/ui/svgs/vercel'
import { Supabase } from '@/registry/core/ui/svgs/supabase'
import { Linear } from '@/registry/core/ui/svgs/linear'
import { Slack } from '@/registry/core/ui/svgs/slack'
import { Firebase } from '@/registry/core/ui/svgs/firebase'
import { ClerkIconDark as Clerk } from '@/registry/core/ui/svgs/clerk'
import { LogoIcon } from '@/registry/bases/radix/veil/ui/logo'

import { Button } from '@/registry/bases/radix/veil/ui/button'
import Link from 'next/link'

export default function Integrations() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl">
                <IntegrationsIllustration />
                <div className="mx-auto mt-12 max-w-md text-balance px-6 text-center">
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
            className="**:fill-foreground @max-md:scale-85 relative mx-auto flex size-96"
        >
            <div className="bg-card shadow-black/6.5 ring-border absolute inset-0 m-auto flex size-12 items-center rounded-full shadow-sm ring *:m-auto">
                <LogoIcon className="size-5" />
            </div>
            <div className="rotate-120 *:-rotate-120 absolute inset-0 flex items-center justify-between gap-12">
                <div className="border-foreground/10 absolute inset-4 rounded-full border border-dashed" />

                <div className="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto">
                    <Firebase className="size-3.5" />
                </div>
                <div className="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto">
                    <Supabase className="size-3.5" />
                </div>
            </div>
            <div className="absolute inset-12 flex items-center justify-between gap-12">
                <div className="border-foreground/10 absolute inset-4 rounded-full border border-dashed" />

                <div className="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto">
                    <Vercel className="size-3.5" />
                </div>
                <div className="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto">
                    <Slack className="size-3.5" />
                </div>
            </div>
            <div className="absolute inset-24 flex rotate-45 items-center justify-between gap-12 *:-rotate-45">
                <div className="border-foreground/10 absolute inset-4 rounded-full border border-dashed" />

                <div className="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto">
                    <Clerk className="size-3.5" />
                </div>
                <div className="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto">
                    <Linear className="size-3.5" />
                </div>
            </div>
        </div>
    )
}
