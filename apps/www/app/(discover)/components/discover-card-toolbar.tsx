import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@tailark/core/ui/tooltip'
import { OpenInV0Button } from '@/components/block-preview/open-in-v0'
import * as Toolbar from '@radix-ui/react-toolbar'
import { Eye, View } from 'lucide-react'
import Link from 'next/link'
import { RegistryInstallButton, CLIGroupButtonProps } from '@/components/block-preview/toolbar'

export interface DiscoverCardToolbarProps extends CLIGroupButtonProps {
    href: string
    title: string
    subtitle: string
    registryUrl: string
    isBlock?: boolean
    disableV0?: boolean
    openInNewTab?: boolean
}

export const DiscoverCardToolbar = ({ href, isBlock, title, subtitle, registryUrl, eventName, category, registryItem, theme, disableV0, openInNewTab }: DiscoverCardToolbarProps) => {
    return (
        <>
            <div
                aria-hidden="true"
                className="mask-t-from-25% z-1 not-group-hover:opacity-0 pointer-events-none absolute inset-x-[13px] bottom-[67px] h-32 rounded-b-xl bg-indigo-500/15 backdrop-blur"
            />

            <div className="z-1 not-group-hover:scale-97 not-group-hover:opacity-0 absolute inset-x-0 bottom-20 mx-auto size-fit duration-100">
                <div className="ring-foreground/6.5 border-background/25 bg-background/10 relative rounded-[9px] border p-0.5 shadow-lg ring-1 backdrop-blur-md">
                    <Toolbar.Root className="ring-foreground/10 *:active:scale-97 *:hover:bg-foreground/5 bg-card flex h-7 divide-x overflow-hidden rounded-md shadow shadow-black/5 ring-1 *:duration-100">
                        <TooltipProvider>
                            {isBlock && category && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={openInNewTab ? `https://pro.tailark.com/${category}` : `/${category}`}
                                            target={openInNewTab ? '_blank' : undefined}
                                            rel={openInNewTab ? 'noopener noreferrer' : undefined}
                                            className="flex h-7 w-9 items-center justify-center">
                                            <View className="size-3.5 fill-indigo-500/20" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={5}>
                                        <p>Preview all {category.endsWith('s') ? category : `${category}s`}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={href}
                                        target={openInNewTab ? '_blank' : undefined}
                                        rel={openInNewTab ? 'noopener noreferrer' : undefined}
                                        className="flex h-7 w-9 items-center justify-center">
                                        <Eye className="size-3.5 fill-indigo-500/20" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent sideOffset={5}>
                                    <p>Preview</p>
                                </TooltipContent>
                            </Tooltip>
                            {registryItem && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <RegistryInstallButton
                                            registryItem={registryItem}
                                            eventName={eventName}
                                            title={title}
                                            category={category}
                                            theme={theme}
                                            iconOnly={true}
                                            className="rounded-none"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={5}>
                                        <p>Install</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}
                            {!disableV0 && (
                                <OpenInV0Button
                                    registryUrl={registryUrl}
                                    title={title}
                                    category={subtitle}
                                    className="h-7 w-9 rounded-none px-0 ring-0"
                                />
                            )}
                        </TooltipProvider>
                    </Toolbar.Root>
                </div>
            </div>
        </>
    )
}
