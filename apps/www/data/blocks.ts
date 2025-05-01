import fs from 'fs'
import path from 'path'
export interface Block {
    slug: string
    title: string
    category: string
    preview: string
    code: string
}

function loadCode(filePath: string): string {
    const fullPath = path.join(process.cwd(), filePath)
    if (fs.existsSync(fullPath)) {
        let code = fs.readFileSync(fullPath, 'utf-8')
        
        code = code.replace(/<!--.*?-->/g, '').trim()

        const tailarkPattern = /@tailark\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)/g
        code = code.replace(tailarkPattern, (match, kit, type) => {
            const replacements: Record<string, string> = {
                'ui': '@/components/ui',
                'components': '@/components',
                'lib': '@/lib',
                'hooks': '@/hooks',
                'styles': '@/styles',
                'public': '@/public',
                'motion-primitives': '@/components/motion-primitives',
                'magic-ui': '@/components/magic-ui'
            }
            
            return replacements[type] || `@/${type}`;
        })

        code = code.replace(/from\s+['"]\.\/([^'"]+)['"]/g, 'from "@/components/$1"')
        
        return code
    }
    return '// Code not found'
}

function generateBlocks(): Block[] {
    const blocks: Block[] = []
    const defaultKitDir = path.join(process.cwd(), '../../packages/default-kit/blocks')
    
    if (!fs.existsSync(defaultKitDir)) {
        console.warn(`Default kit directory not found at ${defaultKitDir}`)
        return blocks
    }
    
    const categories = fs.readdirSync(defaultKitDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    
    for (const category of categories) {
        const categoryDir = path.join(defaultKitDir, category)
        const variants = fs.readdirSync(categoryDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
        
        for (const variant of variants) {
            const blockFilePath = path.join('../../packages/default-kit/blocks', category, variant, 'index.tsx')
            
            blocks.push({
                slug: `${category}-${variant}`,
                title: variant,
                category: category,
                preview: `/preview/${category}/${variant}`,
                code: loadCode(blockFilePath)
            })
        }
    }
    
    return blocks
}

export const blocks: Block[] = generateBlocks()
export const categories = [...new Set(blocks.map((b) => b.category))]