import React from 'react'
import { Beacon } from '@/registry/core/ui/svgs/beacon'
import { Bolt } from '@/registry/core/ui/svgs/bolt'
import { Cisco } from '@/registry/core/ui/svgs/cisco'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'
import { Linear } from '@/registry/core/ui/svgs/linear'

export default function LogoCloud() {
    return (
        <section className="bg-background @container py-12">
            <div className="mx-auto max-w-xl px-6">
                <div className="**:fill-foreground @xl:grid-cols-4 grid grid-cols-3 gap-x-8 gap-y-12 *:flex *:items-center *:justify-center">
                    <div>
                        <VercelFull className="h-3.5 w-full" />
                    </div>
                    <div>
                        <Spotify className="h-4.5 w-full" />
                    </div>

                    <div>
                        <SupabaseFull className="h-5" />
                    </div>
                    <div>
                        <Hulu className="h-3.5 w-full" />
                    </div>
                    <div>
                        <Bolt className="h-4 w-full" />
                    </div>
                    <div>
                        <Linear className="size-4" />
                    </div>
                    <div>
                        <Cisco className="h-5 w-full" />
                    </div>
                    <div>
                        <Beacon className="h-3.5 w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
