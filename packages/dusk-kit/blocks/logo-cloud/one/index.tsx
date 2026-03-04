import { Spotify } from '@tailark/core/components/logos/spotify'
import { Supabase } from '@tailark/core/components/logos/supabase'
import { Hulu } from '@tailark/core/components/logos/hulu'
import { Firebase } from '@tailark/core/components/logos/firebase'
import { Beacon } from '@tailark/core/components/logos/beacon'
import { Bolt } from '@tailark/core/components/logos/bolt'
import { Claude } from '@tailark/core/components/logos/claude'
import { Figma } from '@tailark/core/components/logos/figma'
import { VercelFull } from '@tailark/core/components/logos/vercel'
import { Cisco } from '@tailark/core/components/logos/cisco'

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
                    <Supabase className="h-6" />
                    <Hulu
                        height={18}
                        width={56}
                    />
                    <Spotify
                        height={24}
                        width={80}
                    />
                    <Firebase
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
