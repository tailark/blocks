/**
 * Helper to generate OpenGraph image URLs for categories and previews
 */
export function getOgUrl(options: {
  type: 'category' | 'preview' | 'default'
  kit?: string
  category?: string
  variant?: string
}) {
  const { type, kit, category, variant } = options
  const params = new URLSearchParams()
  
  params.set('type', type)
  
  if (kit) params.set('kit', kit)
  if (category) params.set('category', category)
  if (variant) params.set('variant', variant)
  
  return `/api/og?${params.toString()}`
}
