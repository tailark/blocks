import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'

export interface Block {
    slug: string
    title: string
    category: string
    preview: string
    code: string
}

function loadCode(filePath: string): string {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.readFileSync(fullPath, 'utf-8')
}

function getNumericValue(title: string): number {
    const numberMap: Record<string, number> = {
        'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 
        'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 
        'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
        'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18,
        'nineteen': 19, 'twenty': 20
    };
    return numberMap[title] || 999;
}

const files = glob.sync('app/preview/**/page.tsx')

const blocksData: Block[] = files.map(filePath => {
    const parts = filePath.split(path.sep)
    const category = parts[2]
    const title = parts[3]
    return {
        slug: category,
        title,
        category,
        preview: `/preview/${category}/${title}`,
        code: loadCode(filePath)
    }
})

export const blocks = blocksData.sort((a, b) => {
    const categoryOrder = [
        'hero-section', 'logo-cloud', 'features', 'integrations', 
        'content', 'stats', 'team', 'testimonials', 'call-to-action', 
        'footer', 'pricing', 'comparator', 'faqs', 'login', 
        'sign-up', 'forgot-password', 'contact'
    ];
    const getCategoryIndex = (cat: string) => {
        const index = categoryOrder.indexOf(cat);
        return index === -1 ? categoryOrder.length : index;
    };
    const categoryComparison = getCategoryIndex(a.category) - getCategoryIndex(b.category);
    if (categoryComparison !== 0) return categoryComparison;
    
    return getNumericValue(a.title) - getNumericValue(b.title);
});

export const categories = [...new Set(blocks.map((b) => b.category))]