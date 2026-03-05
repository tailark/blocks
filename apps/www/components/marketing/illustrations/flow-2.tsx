'use client'

import { Database, Server, Cloud } from 'lucide-react'
import { LogoIcon } from '@/components/logo'

export const Flow2Illustration = () => {
    return (
        <div
            aria-hidden
            className="relative flex min-h-[420px] w-fit min-w-[420px] flex-col items-center justify-center">
            <style jsx>{`
                @keyframes source-to-logo {
                    0% {
                        stroke-dashoffset: 400;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes logo-to-outputs {
                    0% {
                        stroke-dashoffset: 550;
                    }
                    10% {
                        stroke-dashoffset: 400;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>

            <svg
                viewBox="0 0 173 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground/15 pointer-events-none absolute inset-0 mx-auto h-full w-1/2">
                <path
                    d="M92.5 81.5V119.177C92.5 128.013 99.6634 135.177 108.5 135.177H156.5C165.337 135.177 172.5 142.34 172.5 151.177V164.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                />
                <path
                    d="M80.5 81.5V119.177C80.5 128.013 73.3366 135.177 64.5 135.177H16.5C7.66344 135.177 0.5 142.34 0.5 151.177V164.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                />
                <path
                    d="M86.5 81V164.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                />
                <path
                    d="M86.5 0.5V80.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                />

                {/* animated paths */}

                <path
                    d="M86.5 0.5V80.5"
                    stroke="url(#flow2-source)"
                    strokeLinecap="round"
                    strokeDasharray="4 30"
                    strokeDashoffset="30"
                    className="not-group-hover:opacity-0 group-hover:animate-[source-to-logo_2s_linear_infinite]"
                />
                <path
                    d="M92.5 81.5V119.177C92.5 128.013 99.6634 135.177 108.5 135.177H156.5C165.337 135.177 172.5 142.34 172.5 151.177V164.5"
                    stroke="url(#flow2-right)"
                    strokeLinecap="round"
                    strokeDasharray="4 40"
                    strokeDashoffset="40"
                    className="not-group-hover:opacity-0 group-hover:animate-[logo-to-outputs_3s_linear_infinite]"
                />
                <path
                    d="M80.5 81.5V119.177C80.5 128.013 73.3366 135.177 64.5 135.177H16.5C7.66344 135.177 0.5 142.34 0.5 151.177V164.5"
                    stroke="url(#flow2-left)"
                    strokeLinecap="round"
                    strokeDasharray="4 40"
                    strokeDashoffset="40"
                    className="not-group-hover:opacity-0 group-hover:animate-[logo-to-outputs_3s_linear_infinite]"
                />
                <path
                    d="M86.5 81V164.5"
                    stroke="url(#flow2-center)"
                    strokeLinecap="round"
                    strokeDasharray="4 30"
                    strokeDashoffset="40"
                    className="not-group-hover:opacity-0 group-hover:animate-[logo-to-outputs_3s_linear_infinite]"
                />
                <defs>
                    <linearGradient
                        id="flow2-source"
                        gradientUnits="userSpaceOnUse"
                        x1="86.5"
                        y1="0"
                        x2="86.5"
                        y2="81">
                        <stop
                            offset="0%"
                            stopColor="transparent"
                        />
                        <stop
                            offset="50%"
                            stopColor="var(--color-cyan-400)"
                        />
                        <stop
                            offset="100%"
                            stopColor="transparent"
                        />
                    </linearGradient>
                    <linearGradient
                        id="flow2-center"
                        gradientUnits="userSpaceOnUse"
                        x1="86.5"
                        y1="81"
                        x2="86.5"
                        y2="165">
                        <stop
                            offset="0%"
                            stopColor="var(--color-background)"
                            stopOpacity={0}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--color-violet-400)"
                        />
                    </linearGradient>
                    <linearGradient
                        id="flow2-right"
                        gradientUnits="userSpaceOnUse"
                        x1="92"
                        y1="81"
                        x2="173"
                        y2="165">
                        <stop
                            offset="0%"
                            stopColor="var(--color-background)"
                            stopOpacity={0}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--color-amber-400)"
                        />
                    </linearGradient>
                    <linearGradient
                        id="flow2-left"
                        gradientUnits="userSpaceOnUse"
                        x1="81"
                        y1="81"
                        x2="0"
                        y2="165">
                        <stop
                            offset="0%"
                            stopColor="var(--color-background)"
                            stopOpacity={0}
                        />

                        <stop
                            offset="100%"
                            stopColor="var(--color-emerald-400)"
                        />
                    </linearGradient>
                </defs>
            </svg>

            <div className="bg-illustration ring-border-illustration relative z-10 flex items-center gap-2 rounded-xl p-1 pr-3 shadow-md shadow-cyan-800/10 ring-1">
                <div className="after:border-foreground/5 relative flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 after:absolute after:inset-0 after:rounded-lg after:border">
                    <Database className="size-4 text-cyan-500" />
                </div>
                <div>
                    <div className="text-xs font-semibold">Data Source</div>
                    <div className="text-foreground/50 text-[10px]">PostgreSQL</div>
                </div>
            </div>

            <div className="my-18 relative z-10">
                <div className="dark:bg-illustration/75 dark:ring-border-illustration relative flex size-14 items-center justify-center rounded-full bg-black/75 shadow-xl shadow-black/20 ring-1 ring-black backdrop-blur">
                    <LogoIcon className="size-5" />
                </div>
            </div>

            {/* Bottom: Outputs */}
            <div className="relative z-10 flex gap-6">
                <div className="bg-illustration ring-border-illustration flex items-center gap-1.5 rounded-xl p-1 pr-3 shadow-md shadow-emerald-800/10 ring-1">
                    <div className="after:border-foreground/5 relative flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 after:absolute after:inset-0 after:rounded-lg after:border">
                        <Server className="size-4 text-emerald-500" />
                    </div>
                    <div className="text-[10px] font-medium">Cache</div>
                </div>
                <div className="bg-illustration ring-border-illustration flex items-center gap-1.5 rounded-xl p-1 pr-3 shadow-md shadow-violet-800/10 ring-1">
                    <div className="after:border-foreground/5 relative flex size-8 items-center justify-center rounded-lg bg-violet-500/10 after:absolute after:inset-0 after:rounded-lg after:border">
                        <Cloud className="size-4 text-violet-500" />
                    </div>
                    <div className="text-[10px] font-medium">CDN</div>
                </div>
                <div className="bg-illustration ring-border-illustration flex items-center gap-1.5 rounded-xl p-1 pr-3 shadow-md shadow-amber-800/10 ring-1">
                    <div className="after:border-foreground/5 relative flex size-8 items-center justify-center rounded-lg bg-amber-500/10 after:absolute after:inset-0 after:rounded-lg after:border">
                        <Database className="size-4 text-amber-500" />
                    </div>
                    <div className="text-[10px] font-medium">Backup</div>
                </div>
            </div>
        </div>
    )
}

export default Flow2Illustration
