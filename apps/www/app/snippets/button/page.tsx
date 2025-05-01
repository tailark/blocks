import SnippetPreview from '@/components/SnippetPreview'
import { Button } from '@/components/snippets/buttons/button'
import { ButtonProps } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Shadcn Button Snippets',
    description: 'Custom shadcn buttons for your marketing website.',
}

export default function ButtonsPage() {
    return (
        <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
            <div className="group [--color-primary:var(--color-blue-600)] dark:[--color-primary-foreground:var(--color-white)]">
                <Button className="from-primary to-primary/85 text-primary-foreground border border-zinc-950/25 bg-gradient-to-t shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent">
                    <span>Primary</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('default')} {...formatButtonVariantCode('default', 'from-primary to-primary/85 text-primary-foreground border border-zinc-950/25 bg-gradient-to-t shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/20 dark:ring-transparent')} />
                </div>
            </div>
            <div className="group [--color-primary:var(--color-blue-600)] dark:[--color-primary-foreground:var(--color-white)]">
                <Button className="from-primary/85 to-primary text-primary-foreground inset-shadow-2xs inset-shadow-white/25 bg-linear-to-b dark:from-primary/75 dark:bg-linear-to-t border border-zinc-950/35 shadow-md shadow-zinc-950/20 ring-0 transition-[filter] duration-200 hover:brightness-110 active:brightness-95 dark:border-0 dark:border-zinc-950/50">
                    <span className="relative [text-shadow:0_1px_0_var(--color-blue-800)]">Primary</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('default')} {...formatButtonVariantCode('default', 'from-primary/85 to-primary text-primary-foreground inset-shadow-2xs inset-shadow-white/25 bg-linear-to-b dark:from-primary/75 dark:bg-linear-to-t border border-zinc-950/35 shadow-md shadow-zinc-950/20 ring-0 transition-[filter] duration-200 hover:brightness-110 active:brightness-95 dark:border-0 dark:border-zinc-950/50')} />
                </div>
            </div>
            <div className="group [--color-primary:var(--color-blue-600)] dark:[--color-primary-foreground:var(--color-white)]">
                <Button className="from-primary to-primary/85 text-primary-foreground dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 dark:border-t-0 dark:border-zinc-950/50 dark:ring-white/5">
                    <span className="[text-shadow:0_1px_0_var(--color-blue-800)]">Primary</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('default')} {...formatButtonVariantCode('default', 'from-primary to-primary/85 text-primary-foreground dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 dark:border-t-0 dark:border-zinc-950/50 dark:ring-white/5')} />
                </div>
            </div>
            <div className="group">
                <Button className="bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/80 to-primary dark:from-primary dark:to-primary/80 text-primary-foreground dark:border-primary border text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95">
                    <span>Primary</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('default')} {...formatButtonVariantCode('default', 'bg-linear-to-b **:[text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/80 to-primary dark:from-primary dark:to-primary/80 text-primary-foreground dark:border-primary border text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95')} />
                </div>
            </div>
            <div className="group">
                <Button className="bg-radial-[at_52%_-52%] **:[text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/70 to-primary/95 text-primary-foreground inset-shadow-2xs inset-shadow-white/25 dark:inset-shadow-white dark:from-primary dark:to-primary/70 dark:hover:to-primary border text-sm shadow-md shadow-zinc-950/30 ring-0 transition-[filter] duration-200 hover:brightness-125 active:brightness-95 dark:border-0">
                    <span className="realtive [text-shadow:0_1px_0_var(--color-zinc-950)] dark:[text-shadow:0_1px_0_var(--color-white)]">Primary</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview
                        description={getButtonVariantDescription('default')}
                        {...formatButtonVariantCode('default', 'bg-radial-[at_52%_-52%] **:[text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/70 to-primary/95 text-primary-foreground inset-shadow-2xs inset-shadow-white/25 dark:inset-shadow-white dark:from-primary dark:to-primary/70 dark:hover:to-primary border text-sm shadow-md shadow-zinc-950/30 ring-0 transition-[filter] duration-200 hover:brightness-125 active:brightness-95 dark:border-0')}
                    />
                </div>
            </div>
            <div className="group">
                <Button className="active:scale-98 border-primary bg-primary/75 text-primary-foreground hover:bg-primary/85 dark:bg-primary/90 dark:border-primary dark:hover:bg-primary border border-b-2 shadow-md shadow-zinc-950/20 ring ring-inset ring-white/15 transition-[filter,scale,background] duration-200 hover:brightness-110 dark:ring-transparent">
                    <span className="realtive [--shadow-color:var(--color-zinc-950)] [text-shadow:0_1px_0_var(--shadow-color)] dark:[--shadow-color:var(--color-white)]">Primary</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('default')} {...formatButtonVariantCode('default', 'active:scale-98 border-primary bg-primary/75 text-primary-foreground hover:bg-primary/85 dark:bg-primary/90 dark:border-primary dark:hover:bg-primary border border-b-2 shadow-md shadow-zinc-950/20 ring ring-inset ring-white/15 transition-[filter,scale,background] duration-200 hover:brightness-110 dark:ring-transparent')} />
                </div>
            </div>
            <div className="group" hidden>
                <Button variant="outline" className="bg-linear-to-b before:bg-background hover:before:bg-muted relative border-none from-zinc-200 from-75% to-zinc-400/65 shadow-sm shadow-zinc-950/10 ring-0 *:relative before:absolute before:inset-px before:rounded-[calc(var(--btn-radius)-1px)] dark:from-zinc-800 dark:to-zinc-800">
                    <span className="relative">Outline</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('outline')} {...formatButtonVariantCode('outline', 'bg-linear-to-b before:bg-background hover:before:bg-muted relative border-none from-zinc-200 from-75% to-zinc-400/65 shadow-sm shadow-zinc-950/10 *:relative before:absolute before:inset-px before:rounded-[calc(var(--btn-radius)-1px)] dark:from-zinc-800 dark:to-zinc-800')} />
                </div>
            </div>
            <div className="group">
                <Button variant="outline" className="bg-muted hover:bg-background dark:bg-muted/25 dark:hover:bg-muted/50 dark:border-border inset-shadow-2xs inset-shadow-white dark:inset-shadow-transparent relative flex border border-zinc-300 shadow-sm shadow-zinc-950/10 ring-0 duration-150">
                    <span className="realtive">Outline</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('outline')} {...formatButtonVariantCode('outline', 'bg-muted hover:bg-background dark:bg-muted/25 dark:hover:bg-muted/50 dark:border-border inset-shadow-2xs inset-shadow-white dark:inset-shadow-transparent relative flex border border-zinc-300 shadow-sm shadow-zinc-950/10 ring-0 duration-150')} />
                </div>
            </div>
            <div className="group">
                <Button variant="outline" className="shadow-xs bg-linear-to-t hover:to-muted/50 to-background from-muted dark:from-muted/50 dark:border-border border border-zinc-300 shadow-zinc-950/10 ring-0 duration-200">
                    Outline
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('outline')} {...formatButtonVariantCode('outline', 'shadow-xs bg-linear-to-t hover:to-muted to-background from-muted dark:from-muted/50 dark:border-border border border-zinc-300 shadow-zinc-950/10 duration-200')} />
                </div>
            </div>
            <div className="group">
                <Button variant="outline" className="bg-background hover:bg-muted/50 dark:ring-input border-input/50 dark:border-input relative border-b-2 shadow-sm shadow-zinc-950/15 ring-1 ring-zinc-300">
                    <span className="realtive">Outline</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('outline')} {...formatButtonVariantCode('outline', 'bg-background hover:bg-muted/50 dark:ring-input border-input/50 dark:border-input relative border-b-2 shadow-sm shadow-zinc-950/15 ring-1 ring-zinc-300')} />
                </div>
            </div>

            <div className="group">
                <Button className="from-destructive to-destructive/85 text-destructive-foreground border border-zinc-950/25 bg-gradient-to-t shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/15 dark:ring-transparent">
                    <span>Destructive</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('destructive')} {...formatButtonVariantCode('destructive', 'from-destructive to-destructive/85 text-destructive-foreground border border-zinc-950/25 bg-gradient-to-t shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-white/15 dark:ring-transparent')} />
                </div>
            </div>
            <div className="group">
                <Button className="from-destructive/85 to-destructive text-destructive-foreground inset-shadow-2xs inset-shadow-white/25 bg-linear-to-b dark:from-destructive/75 dark:bg-linear-to-t border border-zinc-950/35 shadow-md shadow-zinc-950/20 ring-0 transition-[filter] duration-200 hover:brightness-110 active:brightness-95 dark:border-0 dark:border-zinc-950/50">
                    <span className="relative [text-shadow:0_1px_0_var(--color-red-800)]">Destructive</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview description={getButtonVariantDescription('destructive')} {...formatButtonVariantCode('destructive', 'from-destructive/85 to-destructive text-destructive-foreground inset-shadow-2xs inset-shadow-white/25 bg-linear-to-b dark:from-destructive/75 dark:bg-linear-to-t border border-zinc-950/35 shadow-md shadow-zinc-950/20 ring-0 transition-[filter] duration-200 hover:brightness-110 active:brightness-95 dark:border-0 dark:border-zinc-950/50')} />
                </div>
            </div>
            <div className="group border-b border-dashed">
                <Button className="from-destructive to-destructive/85 text-destructive-foreground dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 dark:border-t-0 dark:border-zinc-950/50 dark:ring-white/5">
                    <span className="[text-shadow:0_1px_0_var(--color-red-800)]">Destructive</span>
                </Button>

                <div className={actionClasses}>
                    <SnippetPreview
                        description={getButtonVariantDescription('destructive')}
                        {...formatButtonVariantCode('destructive', 'from-destructive to-destructive/85 text-destructive-foreground dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 dark:border-t-0 dark:border-zinc-950/50 dark:ring-white/5')}
                    />
                </div>
            </div>
        </div>
    )
}

const formatButtonVariantCode = (variant: ButtonProps['variant'], code: string) => {
    const displayedCode = `variant: {
    ${variant}: '${code}',
},`
    return {
        codeToCopy: code,
        displayedCode,
    }
}

const getButtonVariantDescription = (variant: ButtonProps['variant']) => {
    return `Add these Utilities to your button component's \`${variant}\` variant to apply this style configuration`
}

const actionClasses = 'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'
