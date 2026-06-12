import { Spotify } from '@/registry/core/ui/svgs/spotify'
import { VercelFull } from '@/registry/core/ui/svgs/vercel'
import { SupabaseFull } from '@/registry/core/ui/svgs/supabase'
import { Hulu } from '@/registry/core/ui/svgs/hulu'

export default function LogoCloud() {
    return (
        <section>
            <div className="mx-auto max-w-5xl px-6 py-8">
                <div className="flex flex-wrap items-center gap-4">
                    <p className="text-muted-foreground text-center">Trusted by teams at :</p>
                    <div className="**:fill-foreground flex items-center justify-center gap-8">
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
