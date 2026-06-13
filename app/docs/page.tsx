export default function DocsPage() {
    return (
        <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-16">
            <div className="flex flex-col gap-3">
                <p className="font-mono text-sm text-zinc-500">Docs</p>
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
                    Using the Tailark registry
                </h1>
                <p className="text-lg leading-8 text-zinc-600">
                    Point shadcn to the public registry endpoint and install items by name.
                </p>
            </div>

            <section className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-5">
                <h2 className="text-lg font-medium text-zinc-950">Registry endpoints</h2>
                <ul className="flex flex-col gap-3 text-sm text-zinc-600">
                    <li>
                        <code className="font-mono text-zinc-950">/registry</code> returns the
                        registry index.
                    </li>
                    <li>
                        <code className="font-mono text-zinc-950">/registry.json</code> returns the
                        registry index using the conventional shadcn filename.
                    </li>
                    <li>
                        <code className="font-mono text-zinc-950">/registry/[name]</code> returns a
                        single registry item with file contents.
                    </li>
                </ul>
            </section>
        </main>
    )
}
