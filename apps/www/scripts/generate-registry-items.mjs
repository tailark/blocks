#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const appRoot = path.resolve(scriptDir, '..')
const publicRegistryDir = path.join(appRoot, 'public', 'r')

const packageNamespaces = ['@tailark/core', '@tailark/mist', '@tailark/dusk', '@tailark/veil', '@mist', '@veil']

const segmentToLocalAlias = {
    'components/ui': '@/components/ui',
    components: '@/components',
    ui: '@/components/ui',
    lib: '@/lib',
    hooks: '@/hooks',
    styles: '@/styles',
    data: '@/data',
    public: '@/public',
    'motion-primitives': '@/components/motion-primitives',
    'magic-ui': '@/components/magic-ui',
    magicui: '@/components/magic-ui',
}

const exactSpecifierMap = new Map()
const prefixSpecifierMap = new Map()

for (const namespace of packageNamespaces) {
    for (const [segment, localAlias] of Object.entries(segmentToLocalAlias)) {
        exactSpecifierMap.set(`${namespace}/${segment}`, localAlias)
        prefixSpecifierMap.set(`${namespace}/${segment}/`, `${localAlias}/`)
    }
}

function rewriteSpecifier(specifier) {
    if (!specifier.startsWith('@') || specifier.startsWith('@/')) {
        return specifier
    }

    for (const [sourcePrefix, targetPrefix] of prefixSpecifierMap) {
        if (specifier.startsWith(sourcePrefix)) {
            return `${targetPrefix}${specifier.slice(sourcePrefix.length)}`
        }
    }

    const exact = exactSpecifierMap.get(specifier)
    if (exact) {
        return exact
    }

    return specifier
}

function rewriteImportSpecifiers(code) {
    let output = code

    const patterns = [/(from\s+['"])([^'"]+)(['"])/g, /(import\s*\(\s*['"])([^'"]+)(['"]\s*\))/g, /(require\(\s*['"])([^'"]+)(['"]\s*\))/g]

    for (const pattern of patterns) {
        output = output.replace(pattern, (match, prefix, specifier, suffix) => {
            const rewritten = rewriteSpecifier(specifier)
            return rewritten === specifier ? match : `${prefix}${rewritten}${suffix}`
        })
    }

    return output
}

async function normalizeGeneratedRegistryItems() {
    const dirEntries = await fs.readdir(publicRegistryDir, { withFileTypes: true })

    let updatedItemFiles = 0
    let updatedContentBlocks = 0

    for (const dirEntry of dirEntries) {
        if (!dirEntry.isFile() || !dirEntry.name.endsWith('.json')) {
            continue
        }

        const filePath = path.join(publicRegistryDir, dirEntry.name)
        const raw = await fs.readFile(filePath, 'utf8')

        let json
        try {
            json = JSON.parse(raw)
        } catch {
            continue
        }

        if (json?.$schema !== 'https://ui.shadcn.com/schema/registry-item.json' || !Array.isArray(json.files)) {
            continue
        }

        let fileChanged = false

        for (const file of json.files) {
            if (typeof file.content !== 'string') {
                continue
            }

            const nextContent = rewriteImportSpecifiers(file.content)
            if (nextContent !== file.content) {
                file.content = nextContent
                fileChanged = true
                updatedContentBlocks += 1
            }
        }

        if (fileChanged) {
            await fs.writeFile(filePath, `${JSON.stringify(json, null, 2)}\n`, 'utf8')
            updatedItemFiles += 1
        }
    }

    return { updatedItemFiles, updatedContentBlocks }
}

function runShadcnBuild(registryPath) {
    const args = ['exec', 'shadcn', 'build']

    if (registryPath) {
        args.push(registryPath)
    }

    execFileSync('pnpm', args, {
        cwd: appRoot,
        stdio: 'inherit',
    })
}

async function main() {
    const registryPath = process.argv[2]

    runShadcnBuild(registryPath)

    const { updatedItemFiles, updatedContentBlocks } = await normalizeGeneratedRegistryItems()

    console.log(`\n✔ Registry build complete.`)
    if (registryPath) {
        console.log(`✔ Target registry: ${registryPath}`)
    }
    console.log(`✔ Normalized imports in ${updatedContentBlocks} file content blocks across ${updatedItemFiles} registry item files.`)
}

main().catch((error) => {
    console.error('\n✖ Failed to build registry items.')
    console.error(error)
    process.exitCode = 1
})
