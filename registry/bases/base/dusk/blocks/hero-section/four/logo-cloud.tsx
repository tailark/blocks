'use client'
import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { Bolt } from '@/registry/core/ui/svgs/bolt'
import { Beacon } from '@/registry/core/ui/svgs/beacon'
import { useMedia } from '@/registry/core/hooks/use-media'
import { InfiniteSlider } from '@/registry/core/ui/motion-primitives/infinite-slider'

export default function LogoCloud() {
    const isLarge = useMedia('(min-width: 64rem)')

    const Logos = () => {
        return (
            <>
                <Bolt
                    height={24}
                    width={58}
                />
                <VercelFull
                    height={24}
                    width={100}
                />
                <SupabaseFull className="h-7" />
                <Hulu
                    height={20}
                    width={60}
                />
                <Spotify
                    height={28}
                    width={90}
                />
                <Beacon
                    height={26}
                    width={92}
                />
            </>
        )
    }

    return (
        <section className="bg-background pb-16 pt-4">
            <div className="**:fill-foreground relative m-auto max-w-7xl">
                {isLarge ? (
                    <div className="relative flex items-center justify-between p-6">
                        <Logos />
                    </div>
                ) : (
                    <InfiniteSlider
                        gap={56}
                        className="mask-x-from-85% mask-x-to-99%"
                    >
                        <Logos />
                    </InfiniteSlider>
                )}
            </div>
        </section>
    )
}
