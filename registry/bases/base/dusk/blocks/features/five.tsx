'use client'

import { Activity, ArrowRightLeft, ArrowUp, Bell, Calendar, ChevronDown, Clock, CloudDownload, HardDriveDownload, History, Link2, ListChecks, Mail, Mic2, MonitorDown, Plug, Plus, Users, Zap, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/registry/bases/radix/dusk/ui/button'

const features = [
    { id: 'workflow-agents', label: 'Workflow agents' },
    { id: 'alerts', label: 'Alerts' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'integrations', label: 'Integrations' },
] as const

type FeatureId = (typeof features)[number]['id']

const featureHighlights: Record<FeatureId, { icon: LucideIcon; label: string }[]> = {
    'workflow-agents': [
        { icon: ArrowRightLeft, label: 'Automated handoff routing' },
        { icon: ListChecks, label: 'Account playbooks' },
        { icon: Zap, label: 'Follow-up task agents' },
    ],
    alerts: [
        { icon: Bell, label: 'Renewal reminders' },
        { icon: Clock, label: 'Stalled deal signals' },
        { icon: Activity, label: 'Quiet account alerts' },
    ],
    timeline: [
        { icon: History, label: 'Full activity history' },
        { icon: Users, label: 'Team-visible notes' },
        { icon: Mail, label: 'Cross-channel threads' },
    ],
    integrations: [
        { icon: Plug, label: 'Gmail and Outlook sync' },
        { icon: Calendar, label: 'Calendar availability' },
        { icon: Link2, label: 'Billing and Stripe data' },
    ],
}

function FeatureList({ items }: { items: { icon: LucideIcon; label: string }[] }) {
    return (
        <ul className="text-muted-foreground mt-8 divide-y *:flex *:items-center *:gap-3 *:py-3">
            {items.map(({ icon: Icon, label }) => (
                <li key={label}>
                    <Icon className="size-4" />
                    {label}
                </li>
            ))}
        </ul>
    )
}

export default function FeaturesSection() {
    const [activeId, setActiveId] = useState<FeatureId>('workflow-agents')
    const sectionRefs = useRef<Partial<Record<FeatureId, HTMLDivElement | null>>>({})

    const scrollToFeature = (id: FeatureId) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveId(id)
    }

    useEffect(() => {
        const sections = features.map((feature) => sectionRefs.current[feature.id]).filter((section): section is HTMLDivElement => section != null)

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                const nextId = visible[0]?.target.id as FeatureId | undefined
                if (nextId) setActiveId(nextId)
            },
            { rootMargin: '-25% 0px -55% 0px', threshold: [0.15, 0.35, 0.55, 0.75] }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">Built for the full workflow.</span> <br /> One connected revenue product.
                </h2>
                <div className="mt-16 grid gap-6 md:mt-32 lg:grid-cols-[auto_1fr]">
                    <div className="sticky top-24 h-fit w-56 max-lg:hidden">
                        <div className="text-muted-foreground text-sm">Product</div>
                        <div className="-ml-4 mt-4 flex flex-col *:justify-start">
                            {features.map((feature) => (
                                <Button
                                    key={feature.id}
                                    type="button"
                                    variant="ghost"
                                    data-state={activeId === feature.id ? 'active' : undefined}
                                    onClick={() => scrollToFeature(feature.id)}
                                    className="not-data-[state=active]:text-muted-foreground hover:bg-transparent">
                                    {feature.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 md:gap-32">
                        <div
                            ref={(element) => {
                                sectionRefs.current['workflow-agents'] = element
                            }}
                            id="workflow-agents"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Workflow agents</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Seamless handoffs.</span> Email, chat, and support history stay on the account so nobody works from memory.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights['workflow-agents']} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square rounded-3xl border p-3 md:col-span-3">
                                <div className="bg-linear-to-b aspect-76/59 relative m-auto max-w-sm rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                    <Image
                                        src="/payments.png"
                                        className="hidden rounded-[15px] dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={(element) => {
                                sectionRefs.current.alerts = element
                            }}
                            id="alerts"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Alerts</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Proactive alerts.</span> Surface renewals, quiet accounts, and stalled deals before they slip past quarter end.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.alerts} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square rounded-3xl border p-3 md:col-span-3">
                                <AIInputIllustration />
                            </div>
                        </div>

                        <div
                            ref={(element) => {
                                sectionRefs.current.timeline = element
                            }}
                            id="timeline"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Timeline</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Shared timeline.</span> Sales, success, and support work from one account view so <span className="rounded bg-emerald-500/10 px-1.5 text-emerald-500">every handoff keeps context</span>.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.timeline} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square rounded-3xl border p-3 md:col-span-3">
                                <DynamicIslandIllustration />
                            </div>
                        </div>

                        <div
                            ref={(element) => {
                                sectionRefs.current.integrations = element
                            }}
                            id="integrations"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Integrations</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Connected stack.</span> Sync email, calendar, and billing tools so customer data stays current across your workflow.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.integrations} />
                            </div>
                            <div className="border-border/50 relative flex aspect-square rounded-3xl border bg-zinc-100 p-3 md:col-span-3">
                                <DownloadIllustration />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function DownloadIllustration() {
    return (
        <div className="z-1 absolute inset-0 m-auto size-fit scale-95">
            <Button
                variant="secondary"
                asChild
                className="bg-background/25 inset-ring inset-ring-foreground/25 ml-1 backdrop-blur"
                size="sm">
                <div>
                    <HardDriveDownload className="opacity-75" />
                    <span className="border-r pr-2">Download</span>
                    <ChevronDown className="opacity-50" />
                </div>
            </Button>

            <div className="shadow-black/6.5 ring-black/6.5 mt-3 min-w-52 rounded-2xl bg-white p-1 shadow-xl ring *:cursor-pointer">
                <div className="peer flex gap-2 rounded-xl px-3 py-1.5 hover:bg-black/5">
                    <MonitorDown className="size-4 translate-y-0.5 text-black" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-medium text-black">Computer</div>
                        <div className="text-xs text-black/50">16.1MB left</div>
                    </div>
                </div>

                <div className="not-peer-hover:bg-black/5 flex gap-2 rounded-xl px-3 py-1.5">
                    <CloudDownload className="size-4 translate-y-0.5 text-black" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-medium text-black">Cloud</div>
                        <div className="text-xs text-black/50">Unlimited</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AIInputIllustration() {
    return (
        <div
            aria-hidden
            className="z-1 absolute inset-8 m-auto h-fit max-w-sm scale-95">
            <div className="bg-card ring-foreground/15 mt-auto h-fit rounded-3xl p-3 shadow-xl shadow-black/15 ring">
                <div className="text-muted-foreground p-2 pb-3 text-sm">Ask Tailark what you need...</div>
                <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-1">
                        <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                            <Plus />
                        </div>
                        <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                            <Mic2 />
                        </div>
                    </div>

                    <div className="bg-foreground text-background flex size-7 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
                        <ArrowUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

function DynamicIslandIllustration() {
    return (
        <div
            aria-hidden
            className="z-1 mask-b-from-background border-border/50 absolute inset-x-8 bottom-0 mx-auto mt-auto h-2/3 w-10/12 max-w-96 origin-bottom scale-95 rounded-t-[4rem] border px-4 pt-4">
            <div className="bg-foreground/2 ring-foreground/10 h-full overflow-hidden rounded-t-[3rem] p-3 shadow-lg shadow-black/15 ring">
                <div className="relative">
                    <div className="shadow-black/6.5 bg-card ring-foreground/10 relative rounded-[2.25rem] p-2 shadow-xl ring">
                        <div className="flex gap-2">
                            <div className="size-18 relative overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20">
                                <Image
                                    src="https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Théo Balick"
                                    width={136}
                                    height={136}
                                />
                            </div>
                            <div className="py-1 pr-4">
                                <div className="text-sm font-medium">Théo Balick</div>
                                <div className="mt-1.5 flex items-center gap-3">
                                    <div>
                                        <div className="text-foreground/50 text-xs">Expenses</div>
                                        <div className="mt-0.5 text-sm font-semibold">$32.65k</div>
                                    </div>
                                    <div className="bg-border h-7 w-px" />
                                    <div>
                                        <div className="text-foreground/50 text-xs">Income</div>
                                        <div className="mt-0.5 text-sm font-semibold">$2.65k</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
