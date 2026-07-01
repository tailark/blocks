'use client'

import { useMedia } from '@/registry/core/hooks/use-media'
import { InfiniteSlider } from '@/registry/core/ui/motion-primitives/infinite-slider'
import { Beacon } from '@/registry/core/ui/svgs/beacon'
import { Bolt } from '@/registry/core/ui/svgs/bolt'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'

export default function LogoCloud() {
    const isLarge = useMedia('(min-width: 64rem)')

    const Logos = () => {
        return (
            <>
                <Hulu
                    height={20}
                    width={60}
                />

                <VercelFull
                    height={24}
                    width={100}
                />

                <Bolt
                    height={24}
                    width={58}
                />

                <SupabaseFull className="h-7" />

                <Beacon
                    height={26}
                    width={92}
                />

                <Spotify
                    height={28}
                    width={90}
                />
            </>
        )
    }

    return (
        <section className="bg-background">
            <div className="**:fill-foreground relative m-auto max-w-7xl">
                {isLarge ? (
                    <div className="relative flex items-center justify-between px-6 py-12">
                        <Logos />
                    </div>
                ) : (
                    <InfiniteSlider
                        gap={44}
                        className="mask-x-from-85% mask-x-to-99% *:[&>svg]:scale-80 py-8"
                    >
                        <Logos />
                    </InfiniteSlider>
                )}
            </div>
        </section>
    )
}
