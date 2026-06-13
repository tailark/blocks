import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Hulu } from '@/registry/core/ui/svgs/hulu'
import { FirebaseFull } from '@/registry/core/ui/svgs/firebase'
import { Beacon } from '@/registry/core/ui/svgs/beacon'
import { Bolt } from '@/registry/core/ui/svgs/bolt'
import { Claude } from '@/registry/core/ui/svgs/claude'
import { Figma } from '@/registry/core/ui/svgs/figma'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'
import { Cisco } from '@/registry/core/ui/svgs/cisco'

export default function LogoCloud() {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                <div className="**:fill-foreground mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                    <Bolt
                        height={22}
                        width={56}
                    />
                    <VercelFull
                        height={22}
                        width={84}
                    />
                    <SupabaseFull className="h-6" />
                    <Hulu
                        height={18}
                        width={56}
                    />
                    <Spotify
                        height={24}
                        width={80}
                    />
                    <FirebaseFull
                        height={24}
                        width={80}
                    />
                    <Beacon
                        height={24}
                        width={80}
                    />
                    <Claude
                        height={26}
                        width={90}
                    />
                    <Figma
                        height={24}
                        width={24}
                    />
                    <Cisco
                        height={30}
                        width={60}
                    />
                </div>
            </div>
        </section>
    )
}
