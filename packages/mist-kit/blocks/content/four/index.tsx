import { ArrowRight } from 'lucide-react'

export default function ContentSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="@container mx-auto max-w-2xl">
                        <div>
                            <h2 className="text-foreground text-4xl font-semibold">Create Content with AI Assistance</h2>
                            <p className="text-muted-foreground mb-12 mt-4 text-xl">Our AI assistant helps you create better content faster. Generate ideas, improve your writing, and design layouts with simple prompts.</p>
                        </div>

                        <div className="@sm:grid-cols-2 @2xl:grid-cols-3 my-12 grid gap-6">
                            <div className="space-y-2">
                                <span className="mb-4 block text-3xl">💡</span>
                                <h3 className="text-xl font-medium">Generate Ideas</h3>
                                <p className="text-muted-foreground">Spark creativity with AI-powered content suggestions and inspiration.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="mb-4 block text-3xl">✏️</span>
                                <h3 className="text-xl font-medium">Improve Writing</h3>
                                <p className="text-muted-foreground">Enhance your text with smart editing suggestions and style refinements.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="mb-4 block text-3xl">🎨</span>
                                <h3 className="text-xl font-medium">Design Layouts</h3>
                                <p className="text-muted-foreground">Create visually appealing layouts that capture your audience's attention.</p>
                            </div>
                        </div>

                        <div className="border-t">
                            <ul
                                role="list"
                                className="text-muted-foreground mt-8 space-y-2">
                                {[
                                    { value: '90+', label: 'Integrations' },
                                    { value: '56%', label: 'Productivity Boost' },
                                    { value: '24/7', label: 'Customer Support' },
                                    { value: '10k+', label: 'Active Users' },
                                ].map((stat, index) => (
                                    <li
                                        key={index}
                                        className="-ml-0.5 flex items-center gap-1.5">
                                        <ArrowRight className="size-4 opacity-50" />
                                        <span className="text-foreground font-medium">{stat.value}</span> {stat.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
