export const categoryOrder = [
    'hero-section',
    'logo-cloud',
    'features',
    'integrations',
    'content',
    'stats',
    'team',
    'testimonials',
    'call-to-action',
    'footer',
    'pricing',
    'comparator',
    'faqs',
    'login',
    'sign-up',
    'forgot-password',
    'contact',
]

export interface BlockCategory {
    name: string
    description?: string
    width?: number
    height?: number
    aspectRatio?: number
}

export const unsortedBlockCategories: BlockCategory[] = [
    { name: 'hero-section', description: 'Hero sections for landing pages', width: 686, height: 400, aspectRatio: 1.715 },
    { name: 'logo-cloud', description: 'Logo cloud sections', width: 686, height: 200, aspectRatio: 3.43 },
    { name: 'features', description: 'Feature showcase sections', width: 686, height: 500, aspectRatio: 1.372 },
    { name: 'integrations', description: 'Integration showcase sections', width: 686, height: 400, aspectRatio: 1.715 },
    { name: 'content', description: 'Content sections', width: 686, height: 400, aspectRatio: 1.715 },
    { name: 'stats', description: 'Statistics sections', width: 686, height: 300, aspectRatio: 2.287 },
    { name: 'team', description: 'Team member sections', width: 686, height: 500, aspectRatio: 1.372 },
    { name: 'testimonials', description: 'Testimonial sections', width: 686, height: 400, aspectRatio: 1.715 },
    { name: 'call-to-action', description: 'Call to action sections', width: 686, height: 200, aspectRatio: 3.43 },
    { name: 'footer', description: 'Footer sections', width: 686, height: 300, aspectRatio: 2.287 },
    { name: 'pricing', description: 'Pricing sections', width: 686, height: 500, aspectRatio: 1.372 },
    { name: 'comparator', description: 'Comparison sections', width: 686, height: 500, aspectRatio: 1.372 },
    { name: 'faqs', description: 'FAQ sections', width: 686, height: 400, aspectRatio: 1.715 },
    { name: 'login', description: 'Login forms', width: 686, height: 500, aspectRatio: 1.372 },
    { name: 'sign-up', description: 'Sign up forms', width: 686, height: 500, aspectRatio: 1.372 },
    { name: 'forgot-password', description: 'Password recovery forms', width: 686, height: 400, aspectRatio: 1.715 },
    { name: 'contact', description: 'Contact forms', width: 686, height: 500, aspectRatio: 1.372 },
]
