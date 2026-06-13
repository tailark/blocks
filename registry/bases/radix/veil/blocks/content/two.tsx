export default function Content() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <h2 className="text-balance font-serif text-4xl font-medium">Create Content with AI Assistance</h2>

                <div className="@xl:gap-12 mt-12 grid grid-cols-2 gap-6">
                    <p className="text-muted-foreground border-t pt-6">
                        <span className="text-foreground font-medium">Generate Ideas</span> Spark creativity with AI-powered content suggestions and inspiration.
                    </p>

                    <p className="text-muted-foreground border-t pt-6">
                        <span className="text-foreground font-medium">Improve Writing</span> Enhance your text with smart editing suggestions and style refinements.
                    </p>
                </div>
            </div>
        </section>
    )
}
