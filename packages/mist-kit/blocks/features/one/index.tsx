import { Card } from '@mist/components/ui/card'
import { Table } from './table'

export default function Features() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <h2 className="text-foreground text-4xl font-semibold">Effortless Task Management</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">Automate your tasks and workflows by connecting your favorite tools like Notion, Todoist, and more. AI-powered scheduling helps you stay on track and adapt to changing priorities.</p>
                        <div className="bg-foreground/5 rounded-3xl p-6">
                            <Table />
                        </div>
                    </div>

                    <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Marketing Campaigns</h3>
                            <p className="text-muted-foreground my-4 text-lg">Effortlessly plan and execute your marketing campaigns organized.</p>
                            <Card
                                className="aspect-video overflow-hidden px-6"
                                variant="soft">
                                <Card className="h-full translate-y-6" />
                            </Card>
                        </div>
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3>
                            <p className="text-muted-foreground my-4 text-lg">Effortlessly book and manage your meetings. Stay on top of your schedule.</p>
                            <Card
                                className="aspect-video overflow-hidden"
                                variant="soft">
                                <Card className="translate-6 h-full" />
                            </Card>
                        </div>
                    </div>

                    <blockquote className="before:bg-primary relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                        <p className="text-foreground text-lg">Wow, auto-generated pages are the kind of thing that you don't even know you need until you see it. It's like an AI-native CRM.</p>
                        <footer className="mt-4 flex items-center gap-2">
                            <cite>Méschac Irung</cite>
                            <span
                                aria-hidden
                                className="bg-foreground/15 size-1 rounded-full"></span>
                            <span className="text-muted-foreground">Creator</span>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
