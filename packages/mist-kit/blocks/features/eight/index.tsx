import { Card } from '@mist/components/ui/card'
import { CalendarCheck, Layout, Sparkles, Target } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card
                            variant="soft"
                            className="col-span-full overflow-hidden pl-6 pt-6">
                            <Layout className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">AI Code Generation</h3>
                            <p className="text-muted-foreground mt-3 max-w-xl text-balance">Our advanced AI models transform natural language into production-ready code, streamlining development workflows and enabling faster iteration. </p>
                            <div className="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
                                <div className="bg-background rounded-tl-(--radius) ring-foreground/5 relative mx-auto mt-8 h-96 overflow-hidden border border-transparent shadow ring-1">
                                    <Image
                                        src="/mist/tailark-3.png"
                                        alt="app screen"
                                        width="2880"
                                        height="1842"
                                        className="object-top-left h-full object-cover"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card
                            variant="soft"
                            className="p-6">
                            <Target className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">AI Code Generation</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Our advanced AI models transform natural language into production-ready code.</p>
                        </Card>

                        <Card
                            variant="soft"
                            className="p-6">
                            <CalendarCheck className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">Intelligent Code Review</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Our AI analyzes your code for bugs, security issues, and optimization opportunities.</p>
                        </Card>
                        <Card
                            variant="soft"
                            className="p-6">
                            <Sparkles className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">Contextual AI Assistant</h3>
                            <p className="text-muted-foreground mt-3 text-balance">A personalized AI companion that understands your codebase and helps solve complex...</p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
