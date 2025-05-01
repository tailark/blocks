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
        return fs.readFileSync(fullPath, 'utf-8')
    }
    return '// Code not found'
}

/**
 * Automatically generate blocks based on the directory structure in the default-kit package
 */
function generateBlocks(): Block[] {
    const blocks: Block[] = []
    const defaultKitDir = path.join(process.cwd(), '../packages/default-kit/blocks')
    
    // Check if the directory exists
    if (!fs.existsSync(defaultKitDir)) {
        console.warn(`Default kit directory not found at ${defaultKitDir}`)
        return blocks
    }
    
    // Get all category directories
    const categories = fs.readdirSync(defaultKitDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    
    // For each category, get all variants
    for (const category of categories) {
        const categoryDir = path.join(defaultKitDir, category)
        const variants = fs.readdirSync(categoryDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
        
        // For each variant, create a block
        for (const variant of variants) {
            const previewPath = `/preview/${category}/${variant}/page.tsx`
            
            blocks.push({
                slug: category,
                title: variant,
                category: category,
                preview: `/preview/${category}/${variant}`,
                code: loadCode(previewPath)
            })
        }
    }
    
    return blocks
}

// Generate the blocks array
export const blocks: Block[] = generateBlocks()

// Get unique categories
export const categories = [...new Set(blocks.map((b) => b.category))]