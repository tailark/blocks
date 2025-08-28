import CodeBlock from '@/components/code-block'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export const revalidate = false
export const dynamic = 'force-static'

export default function EarlyAccess() {
    return (
        <div className="bg-muted/25 dark:bg-background flex min-h-dvh flex-col pt-8">
            <div className="mx-auto w-full max-w-2xl px-4 py-10">
                <div>
                    <h1 className="text-foreground mb-8 text-4xl font-bold tracking-tight">Tailark Registry</h1>
                    <div className="text-muted-foreground mt-6 space-y-12">
                        <p>
                            The <span className="text-foreground font-medium">Tailark Registry</span> lets you install production‑ready shadcn/UI marketing blocks directly into your project using the shadcn CLI. Add the registry once and then pull blocks by name, no rigid templates, just flexible, composable components you can customize and scale across marketing sites.
                        </p>

                        <div className="space-y-3">
                            <h2 className="text-foreground text-lg font-medium">Add registry</h2>
                            <p>
                                Add the Tailark registry namespace to your <code>components.json</code>.
                            </p>

                            <CodeBlock
                                code={`{
	"registries": {
	  "@tailark": "https://tailark.com/r/{name}.json"
	}
}`}
                                lang="json"
                                className="**:!min-h-auto **:!h-auto my-3 *:rounded-lg *:!border-l-0"
                            />

                            <p>
                                Learn more about registry config from{' '}
                                <Link
                                    href="https://ui.shadcn.com/docs/registry/namespace"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline">
                                    Shadcn UI docs
                                </Link>
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-foreground text-lg font-medium">Usage</h2>
                            <p>
                                Install blocks via the shadcn CLI using the <span className="text-primary">@tailark/{'{name}'}</span> syntax.
                            </p>

                            <CodeBlock
                                code="pnpm dlx shadcn add @tailark/hero-section-1"
                                lang="bash"
                                className="**:!min-h-auto **:!h-auto my-3 *:rounded-lg *:!border-l-0"
                            />

                            <p>Install blocks from the Mist kit the same way:</p>

                            <CodeBlock
                                code="pnpm dlx shadcn add @tailark/mist-hero-section-1"
                                lang="bash"
                                className="**:!min-h-auto **:!h-auto my-3 *:rounded-lg *:!border-l-0"
                            />

                            <p>Don't guess the block name, copy the cli command from each block on its category page.</p>
                        </div>
                        <div>
                            <h2 className="text-foreground text-lg font-medium">Configure MCP</h2>
                            <p className="text-muted-foreground mt-3">Run the following command to configure the mcp server:</p>

                            <CodeBlock
                                code="pnpm dlx shadcn mcp init"
                                lang="bash"
                                className="**:!min-h-auto **:!h-auto my-3 *:rounded-lg *:!border-l-0"
                            />

                            <p className="text-muted-foreground mt-3">Select your MCP client when prompted. Remember to enable the MCP server in your client when done.</p>

                            <div className="mt-12">
                                <h3 className="text-foreground font-medium">Prompt</h3>
                                <p className="text-muted-foreground mt-3">You can now prompt the server. Here are some prompts to try:</p>
                                <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-4">
                                    <li>Find me a hero from tailark registry</li>
                                    <li>Build me a landing page using a hero and features section from tailark registry</li>
                                    <li>Build me a pricing page using a pricing, logo cloud, comparator and faqs blocks from tailark mist registry</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-auto w-full max-w-2xl border-t pt-12">
                <SiteFooter />
            </div>
        </div>
    )
}
