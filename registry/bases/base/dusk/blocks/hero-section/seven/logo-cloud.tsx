import { InfiniteSlider } from '@/registry/core/ui/motion-primitives/infinite-slider'
import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { Bolt } from '@/registry/core/ui/svgs/bolt'

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
        </>
    )
}

export default function LogoCloud() {
    return (
        <section className="bg-background py-12 lg:pt-28">
            <div className="relative m-auto max-w-7xl px-6">
                <div className="**:fill-foreground relative flex gap-6 max-lg:flex-col lg:items-center lg:gap-12">
                    <p className="text-muted-foreground shrink-0 lg:border-r lg:pr-12 lg:text-end">
                        Powering the <br className="max-lg:hidden" /> best teams
                    </p>

                    <div className="hidden w-full flex-wrap justify-between gap-6 lg:flex">
                        <Logos />
                    </div>
                    <InfiniteSlider
                        gap={56}
                        className="mask-x-from-85% mask-x-to-99% lg:hidden"
                    >
                        <Logos />
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    )
}
