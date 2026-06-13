import { type RegistryKit } from "@/lib/registry"

export function ComponentPreview({
    children,
    theme,
}: {
    children: React.ReactNode
    theme: RegistryKit
}) {
    return (
        <div
            data-theme={theme}
            className="scheme-light selection:bg-foreground/10 selection:text-primary bg-background text-foreground"
        >
            {children}
        </div>
    )
}
