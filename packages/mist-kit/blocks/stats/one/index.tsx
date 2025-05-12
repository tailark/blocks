import { Card } from '@mist/components/ui/card'

export default function StatsSection() {
    return (
        <section className="bg-muted py-12 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <Card className="grid gap-0.5 divide-y *:py-8 *:text-center md:grid-cols-3 md:divide-x md:divide-y-0">
                    <div>
                        <div className="text-foreground space-y-1 text-4xl font-bold">+1200</div>
                        <p className="text-muted-foreground">Stars on GitHub</p>
                    </div>
                    <div>
                        <div className="text-foreground space-y-1 text-4xl font-bold">56%</div>
                        <p className="text-muted-foreground">Conversion rate</p>
                    </div>
                    <div>
                        <div className="text-foreground space-y-1 text-4xl font-bold">+500</div>
                        <p className="text-muted-foreground">Powered Apps</p>
                    </div>
                </Card>
            </div>
        </section>
    )
}
