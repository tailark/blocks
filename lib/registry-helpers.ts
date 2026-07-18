import { type Registry } from "shadcn/schema"

export type RegistryItem = NonNullable<Registry["items"]>[number]

const numberWords: Record<string, string> = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    ten: "10",
    eleven: "11",
    twelve: "12",
    thirteen: "13",
    fourteen: "14",
    fifteen: "15",
    sixteen: "16",
    seventeen: "17",
    eighteen: "18",
    nineteen: "19",
    twenty: "20",
}

type RegistryFile = NonNullable<RegistryItem["files"]>[number]

export type BlockMeta = {
    "aspect-ratio"?: string
    width?: number
    height?: number
    "category-media"?: boolean
}

type BlockOptions = {
    category: string
    variant: string
    path: string
    dependencies?: string[]
    packageDependencies?: string[]
    files?: RegistryFile[]
    meta?: BlockMeta
}

type ComponentOptions = {
    name: string
    title: string
    description: string
    path: string
    dependencies?: string[]
    packageDependencies?: string[]
    files?: RegistryFile[]
    target?: string
}

type PageOptions = {
    category: string
    variant: string
    path: string
    target?: string
    dependencies?: string[]
    packageDependencies?: string[]
    files?: RegistryFile[]
    meta?: BlockMeta
}

export function titleize(value: string) {
    return value
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
}

export function variantNumber(variant: string) {
    return numberWords[variant] ?? variant
}

export function createRegistryHelpers({
    kit,
    componentTarget = false,
}: {
    kit: string
    componentTarget?: boolean
}) {
    const kitTitle = titleize(kit)

    const ui = (name: string) => `@tailark-oss/${kit}-${name}`
    const core = (name: string) => `@tailark-oss/core-${name}`
    const motionPrimitive = (name: string) => `@tailark-oss/motion-primitives-${name}`
    const magicUi = (name: string) => `@tailark-oss/magic-ui-${name}`
    const shadcn = (name: string) => `@shadcn/${name}`

    function block({
        category,
        variant,
        path,
        dependencies,
        packageDependencies,
        files,
        meta,
    }: BlockOptions): RegistryItem {
        const number = variantNumber(variant)

        return {
            name: `${kit}-${category}-${number}`,
            type: "registry:block",
            title: `${titleize(category)} ${number}`,
            description: `Tailark ${kitTitle} ${category} variant ${number} block`,
            files: files ?? [
                {
                    path,
                    type: "registry:component",
                    target: `@components/${category}-${number}.tsx`,
                },
            ],
            ...(dependencies?.length ? { registryDependencies: dependencies } : {}),
            ...(packageDependencies?.length ? { dependencies: packageDependencies } : {}),
            ...(meta ? { meta } : {}),
        }
    }

    function component({
        name,
        title,
        description,
        path,
        dependencies,
        packageDependencies,
        files,
        target,
    }: ComponentOptions): RegistryItem {
        return {
            name: `${kit}-${name}`,
            type: "registry:component",
            title,
            description,
            files: files ?? [
                {
                    path,
                    type: "registry:component",
                    ...(target || componentTarget ? { target: target ?? `@components/${name}.tsx` } : {}),
                },
            ],
            ...(dependencies?.length ? { registryDependencies: dependencies } : {}),
            ...(packageDependencies?.length ? { dependencies: packageDependencies } : {}),
        }
    }

    function page({
        category,
        variant,
        path,
        target,
        dependencies,
        packageDependencies,
        files,
        meta,
    }: PageOptions): RegistryItem {
        const number = variantNumber(variant)

        return {
            name: `${kit}-${category}-${number}`,
            type: "registry:page",
            title: `${titleize(category)} ${number}`,
            description: `Tailark ${kitTitle} ${category} variant ${number} page`,
            files: files ?? [
                {
                    path,
                    type: "registry:page",
                    target: target ?? "app/page.tsx",
                },
            ],
            ...(dependencies?.length ? { registryDependencies: dependencies } : {}),
            ...(packageDependencies?.length ? { dependencies: packageDependencies } : {}),
            ...(meta ? { meta } : {}),
        }
    }

    return {
        block,
        component,
        core,
        magicUi,
        motionPrimitive,
        page,
        shadcn,
        ui,
    }
}
