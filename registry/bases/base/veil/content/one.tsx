export default function Content() {
    return (
        <section className="bg-background @container py-24">
            <div className="@2xl:grid-cols-2 mx-auto grid max-w-3xl gap-6 px-6">
                <h2 className="text-balance font-serif text-4xl font-medium">Create Content with AI Assistance</h2>

                <div className="flex flex-col gap-6">
                    <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Generate Ideas</span> Spark creativity with AI-powered content suggestions and inspiration.
                    </p>

                    <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Improve Writing</span> Enhance your text with smart editing suggestions and style refinements.
                    </p>

                    <p className="text-muted-foreground">
                        <span className="text-foreground font-medium">Design Layouts</span> Create visually appealing layouts that capture your audience's attention.
                    </p>
                </div>
            </div>
        </section>
    )
}
