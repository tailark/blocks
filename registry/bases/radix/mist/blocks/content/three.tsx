import Image from 'next/image'

export default function ContentSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl">
                        <div>
                            <span className="text-3xl">🦊</span>
                            <h2 className="text-foreground mt-4 text-4xl font-semibold">Create Content with AI Assistance</h2>
                            <p className="text-muted-foreground mb-12 mt-4 text-xl">Our AI assistant helps you create better content faster. Generate ideas, improve your writing, and design layouts with simple prompts.</p>
                        </div>

                        <div className="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
                            <img
                                src="https://images.unsplash.com/photo-1533119408463-b0f487583ff6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="absolute inset-0 size-full object-cover"
                            />

                            <div className="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12">
                                <Image
                                    src="/mist/tailark-3.png"
                                    alt="app screen"
                                    width="2880"
                                    height="1842"
                                    className="object-top-left size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
