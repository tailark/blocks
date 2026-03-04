import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Spotify } from '@tailark/core/components/logos/spotify'
import { VercelFull } from '@tailark/core/components/logos/vercel'
import { Supabase } from '@tailark/core/components/logos/supabase'
import { Hulu } from '@tailark/core/components/logos/hulu'
import { Bolt } from '@tailark/core/components/logos/bolt'
import { Firebase } from '@tailark/core/components/logos/firebase'
import { Beacon } from '@tailark/core/components/logos/beacon'
import { Claude } from '@tailark/core/components/logos/claude'

export default function LogoCloudTwo() {
    return (
        <section className="bg-background py-16">
            <div className="group relative m-auto max-w-5xl px-6">
                <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Link
                        href="/"
                        className="block text-sm duration-150 hover:opacity-75">
                        <span> Meet Our Customers</span>

                        <ChevronRight className="ml-1 inline-block size-3" />
                    </Link>
                </div>
                <div className="group-hover:blur-xs **:fill-foreground mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14 md:grid-cols-4">
                    <div className="flex items-center">
                        <Bolt className="mx-auto h-5 w-full" />
                    </div>
                    <div className="flex items-center">
                        <VercelFull className="mx-auto h-4 w-full" />
                    </div>
                    <div className="flex items-center">
                        <Supabase className="mx-auto h-6" />
                    </div>
                    <div className="flex items-center">
                        <Hulu className="mx-auto h-4 w-full" />
                    </div>
                    <div className="flex items-center">
                        <Spotify className="mx-auto h-6 w-full" />
                    </div>
                    <div className="flex items-center">
                        <Firebase className="mx-auto h-6 w-full" />
                    </div>
                    <div className="flex items-center">
                        <Beacon className="mx-auto h-4 w-full" />
                    </div>
                    <div className="flex items-center">
                        <Claude className="mx-auto h-5 w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
