import { Button } from '@mist/components/ui/button'
import { Gemini } from '@tailark/core/components/ui/svgs/gemini'
import { GooglePaLM } from '@tailark/core/components/ui/svgs/google-palm'
import { Replit } from '@tailark/core/components/ui/svgs/replit'
import { MediaWiki } from '@tailark/core/components/ui/svgs/media-wiki'
import { MagicUI } from '@tailark/core/components/ui/svgs/magic-ui'
import { VSCodium } from '@tailark/core/components/ui/svgs/vs-codium'
import Link from 'next/link'

export default function Integrations() {
    return (
        <section>
            <div className="mx-auto max-w-5xl px-6 py-8">
                <div className="space-y-6 text-center">
                    <h2 className="text-foreground text-2xl font-semibold">Integrate with your favorite tools : </h2>
                    <div className="*:bg-foreground/5 mx-auto flex max-w-xl flex-wrap justify-center gap-0.5 *:rounded *:p-6 *:first:rounded-l-xl *:last:rounded-r-xl">
                        <div>
                            <Gemini className="m-auto size-8" />
                        </div>
                        <div>
                            <GooglePaLM className="m-auto size-8" />
                        </div>
                        <div>
                            <Replit className="m-auto size-8" />
                        </div>
                        <div>
                            <MediaWiki className="m-auto size-8" />
                        </div>
                        <div>
                            <MagicUI className="m-auto size-8" />
                        </div>
                        <div>
                            <VSCodium className="m-auto size-8" />
                        </div>
                    </div>
                    <Button
                        asChild
                        variant="outline">
                        <Link href="#">More Integrations</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
