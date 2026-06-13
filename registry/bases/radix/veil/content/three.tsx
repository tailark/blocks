import { Lightbulb, Pencil, PencilRuler } from 'lucide-react'

export default function Content() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">Create Content with AI Assistance</h2>
                    <p className="text-muted-foreground">Our AI assistant helps you create better content faster. Generate ideas, improve your writing, and design layouts with simple prompts.</p>
                </div>
                <div className="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
                    <div className="space-y-3 border-t pt-6">
                        <Lightbulb className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Generate Ideas</span> Spark creativity with AI-powered content suggestions and inspiration.
                        </p>
                    </div>

                    <div className="space-y-3 border-t pt-6">
                        <Pencil className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Improve Writing</span> Enhance your text with smart editing suggestions and style refinements.
                        </p>
                    </div>

                    <div className="space-y-3 border-t pt-6">
                        <PencilRuler className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Design Layouts</span> Create visually appealing layouts that capture your audience's attention.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
