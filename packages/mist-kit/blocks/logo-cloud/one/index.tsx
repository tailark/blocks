import { Spotify } from '@tailark/core/components/ui/svgs/spotify'
import { VercelFull } from '@tailark/core/components/ui/svgs/vercel'
import { SupabaseFull } from '@tailark/core/components/ui/svgs/supabase'
import { Hulu } from '@tailark/core/components/ui/svgs/hulu'

export default function LogoCloud() {
    return (
        <section>
            <div className="mx-auto max-w-5xl px-6 py-8">
                <div>
                    <p className="text-muted-foreground font-medium">Trusted by teams at :</p>
                    <div className="**:fill-foreground mt-4 flex items-center gap-12">
                        <Spotify
                            height={22}
                            width={73}
                        />
                        <VercelFull
                            height={20}
                            width={76}
                        />
                        <SupabaseFull className="h-[22px]" />
                        <Hulu
                            height={16}
                            width={50}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
