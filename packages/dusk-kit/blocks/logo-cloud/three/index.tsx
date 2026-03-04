import { InfiniteSlider } from '@tailark/core/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@tailark/core/motion-primitives/progressive-blur'
import { Spotify } from '@tailark/core/components/logos/spotify'
import { VercelFull } from '@tailark/core/components/logos/vercel'
import { Supabase } from '@tailark/core/components/logos/supabase'
import { Hulu } from '@tailark/core/components/logos/hulu'
import { Bolt } from '@tailark/core/components/logos/bolt'
import { Firebase } from '@tailark/core/components/logos/firebase'
import { Beacon } from '@tailark/core/components/logos/beacon'
import { Claude } from '@tailark/core/components/logos/claude'
import { Cisco } from '@tailark/core/components/logos/cisco'
import { Figma } from '@tailark/core/components/logos/figma'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powering the best teams</p>
                    </div>
                    <div className="**:fill-foreground relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
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
                        </InfiniteSlider>

                        <div
                            aria-hidden
                            className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"
                        />
                        <div
                            aria-hidden
                            className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
