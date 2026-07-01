const endpoints = [
    {
        href: '/registry',
        label: '/registry',
        description: 'Registry index for all Tailark items.',
    },
    {
        href: '/registry.json',
        label: '/registry.json',
        description: 'shadcn-compatible registry index.',
    },
    {
        href: '/registry/dusk-button',
        label: '/registry/{name}',
        description: 'Individual registry item endpoint.',
    },
]

export default function Home() {
    return (
        <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-8 px-6 py-16">
            <div className="flex flex-col gap-3">
                <p className="font-mono text-sm text-zinc-500">Tailark Registry</p>
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Open source shadcn/ui registry for Tailark.</h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600">This repository serves the public registry endpoints. The marketing site can live in a separate closed-source app and proxy these paths from the same domain.</p>
            </div>

            <div className="grid gap-3">
                {endpoints.map((endpoint) => (
                    <a
                        className="rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300"
                        href={endpoint.href}
                        key={endpoint.href}
                    >
                        <span className="font-mono text-sm font-medium text-zinc-950">{endpoint.label}</span>
                        <p className="mt-1 text-sm text-zinc-600">{endpoint.description}</p>
                    </a>
                ))}
            </div>
        </main>
    )
}
