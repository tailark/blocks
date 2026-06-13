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

type BlockOptions = {
    category: string
    variant: string
    path: string
    dependencies?: string[]
    packageDependencies?: string[]
    files?: RegistryFile[]
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

    const ui = (name: string) => `@tailark/${kit}-${name}`
    const core = (name: string) => `@tailark/core-${name}`
    const motionPrimitive = (name: string) => `@tailark/motion-primitives-${name}`
    const magicUi = (name: string) => `@tailark/magic-ui-${name}`
    const shadcn = (name: string) => `@shadcn/${name}`

    function block({
        category,
        variant,
        path,
        dependencies,
        packageDependencies,
        files,
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

    return {
        block,
        component,
        core,
        magicUi,
        motionPrimitive,
        shadcn,
        ui,
    }
}
