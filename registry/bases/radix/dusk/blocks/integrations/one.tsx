import { Gemini } from '@/registry/core/ui/svgs/gemini'
import { Replit } from '@/registry/core/ui/svgs/replit'
import { GooglePaLM } from '@/registry/core/ui/svgs/google-palm'
import { MagicUI } from '@/registry/core/ui/svgs/magic-ui'
import { VSCodium } from '@/registry/core/ui/svgs/vs-codium'
import { MediaWiki } from '@/registry/core/ui/svgs/media-wiki'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import Link from 'next/link'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <div className="flex flex-col justify-between gap-12 pb-6 max-lg:order-last md:mt-6">
                        <div>
                            <h2 className="text-balance text-4xl font-medium tracking-tight lg:text-5xl">Integrate with your favorite Tools</h2>
                            <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                            <Button
                                variant="outline"
                                asChild
                            >
                                <Link href="#">Get Started</Link>
                            </Button>
                        </div>

                        <p className="text-muted-foreground max-w-xs text-balance text-lg">
                            Tailark CRM integrates with <span className="text-foreground font-medium">over 150 Tools</span> to enhance your workflow.
                        </p>
                    </div>

                    <div className="mask-radial-at-top-left mask-radial-from-65% mask-radial-[100%_80%] -mx-6 px-6 sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                        <div className="bg-card rounded-2xl border p-3 shadow-lg md:pb-12">
                            <div className="grid grid-cols-2 gap-2">
                                <Integration
                                    icon={<Gemini />}
                                    name="Gemini"
                                    description="The AI model that powers Google's search engine."
                                />
                                <Integration
                                    icon={<Replit />}
                                    name="Replit"
                                    description="The AI model that powers Google's search engine."
                                />
                                <Integration
                                    icon={<GooglePaLM />}
                                    name="GooglePaLM"
                                    description="The AI model that powers Google's search engine."
                                />
                                <Integration
                                    icon={<MagicUI />}
                                    name="MagicUI"
                                    description="The AI model that powers Google's search engine."
                                />
                                <Integration
                                    icon={<VSCodium />}
                                    name="VSCodium"
                                    description="The AI model that powers Google's search engine."
                                />
                                <Integration
                                    icon={<MediaWiki />}
                                    name="MediaWiki"
                                    description="The AI model that powers Google's search engine."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Integration = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
    return (
        <div className="hover:bg-foreground/5 cursor-pointer space-y-4 rounded-lg border p-4 transition-colors">
            <div className="flex size-fit items-center justify-center">{icon}</div>
            <div className="space-y-1">
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">{description}</p>
            </div>
        </div>
    )
}
