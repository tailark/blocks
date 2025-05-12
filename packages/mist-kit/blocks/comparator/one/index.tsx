import { Button } from '@mist/components/ui/button'
import { Check, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'

const tableData = [
    {
        feature: 'Feature 1',
        free: true,
        pro: true,
        startup: true,
    },
    {
        feature: 'Feature 2',
        free: true,
        pro: true,
        startup: true,
    },
    {
        feature: 'Feature 3',
        free: false,
        pro: true,
        startup: true,
    },
    {
        feature: 'Tokens',
        free: '',
        pro: '20 Users',
        startup: 'Unlimited',
    },
    {
        feature: 'Video calls',
        free: '',
        pro: '12 Weeks',
        startup: '56',
    },
    {
        feature: 'Support',
        free: '',
        pro: 'Secondes',
        startup: 'Unlimited',
    },
    {
        feature: 'Security',
        free: '',
        pro: '20 Users',
        startup: 'Unlimited',
    },
]

export default function PricingComparator() {
    return (
        <section className="bg-muted py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="w-full overflow-auto lg:overflow-visible">
                    <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
                        <thead className="bg-muted/95 sticky top-0">
                            <tr className="*:py-4 *:text-left *:font-medium">
                                <th className="lg:w-2/5"></th>
                                <th className="space-y-3">
                                    <span className="block">Free</span>

                                    <Button
                                        asChild
                                        variant="neutral">
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block">Pro</span>
                                    <Button asChild>
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block">Startup</span>
                                    <Button
                                        asChild
                                        variant="neutral">
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="*:py-4">
                                <td className="flex items-center gap-2 font-medium">
                                    <Star className="size-4" />
                                    <span>Features</span>
                                </td>
                                <td></td>
                                <td className="border-none px-4"></td>
                                <td></td>
                            </tr>
                            {tableData.slice(-4).map((row, index) => (
                                <tr
                                    key={index}
                                    className="*:border-b *:py-4">
                                    <td className="text-muted-foreground">{row.feature}</td>
                                    <td>
                                        {row.free === true ? (
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                        ) : (
                                            row.free
                                        )}
                                    </td>
                                    <td>
                                        {row.pro === true ? (
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                        ) : (
                                            row.pro
                                        )}
                                    </td>
                                    <td>
                                        {row.startup === true ? (
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                        ) : (
                                            row.startup
                                        )}
                                    </td>
                                </tr>
                            ))}
                            <tr className="*:pb-4 *:pt-8">
                                <td className="flex items-center gap-2 font-medium">
                                    <Sparkles className="size-4" />
                                    <span>AI Models</span>
                                </td>
                                <td></td>
                                <td className="bg-muted border-none px-4"></td>
                                <td></td>
                            </tr>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="*:border-b *:py-4">
                                    <td className="text-muted-foreground">{row.feature}</td>
                                    <td>
                                        {row.free === true ? (
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                        ) : (
                                            row.free
                                        )}
                                    </td>
                                    <td>
                                        {row.pro === true ? (
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                        ) : (
                                            row.pro
                                        )}
                                    </td>
                                    <td>
                                        {row.startup === true ? (
                                            <Check
                                                className="text-primary size-3"
                                                strokeWidth={3.5}
                                            />
                                        ) : (
                                            row.startup
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
