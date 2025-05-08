import { Card } from '@/components/ui/card'

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                    <Card
                        variant="soft"
                        className="space-y-2 px-6 py-8 md:rounded-r">
                        <div className="text-foreground text-5xl font-bold">+1200</div>
                        <p className="text-muted-foreground">Stars on GitHub</p>
                    </Card>
                    <Card
                        variant="soft"
                        className="space-y-2 px-6 py-8 md:rounded">
                        <div className="text-foreground text-5xl font-bold">56%</div>
                        <p className="text-muted-foreground">Conversion rate</p>
                    </Card>
                    <Card
                        variant="soft"
                        className="space-y-2 px-6 py-8 md:rounded-l">
                        <div className="text-foreground text-5xl font-bold">+500</div>
                        <p className="text-muted-foreground">Powered Apps</p>
                    </Card>
                </div>
            </div>
        </section>
    )
}
