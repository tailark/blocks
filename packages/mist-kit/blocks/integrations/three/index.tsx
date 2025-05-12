import { Card } from '@mist/components/ui/card'
import * as React from 'react'
import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@tailark/core/components/logos'

export default function Integrations() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Integrate with your favorite tools</h2>
                        <p className="text-muted-foreground mt-3 text-lg">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                            title="Google Gemini"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <Gemini />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Replit"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <Replit />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Magic UI"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <MagicUI />
                        </IntegrationCard>

                        <IntegrationCard
                            title="VSCodium"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <VSCodium />
                        </IntegrationCard>

                        <IntegrationCard
                            title="MediaWiki"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <MediaWiki />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Google PaLM"
                            description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.">
                            <GooglePaLM />
                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = 'https://github.com/meschacirung/cnblocks' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card
            variant="soft"
            className="p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="mt-6 space-y-1.5">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{description}</p>
                </div>
            </div>
        </Card>
    )
}
