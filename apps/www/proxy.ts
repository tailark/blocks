import { NextRequest, NextResponse } from 'next/server'

const VALID_KITS = new Set(['dusk', 'mist', 'veil', 'quartz'])
const CATEGORIES = new Set([
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
])

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - assets folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/|assets/).*)',
  ],
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isStaticAsset = pathname.match(
    /\.(js|mjs|css|json|png|jpg|jpeg|gif|webp|ico|svg|map)$/
  )

  if (isStaticAsset) {
    const response = NextResponse.next()
    response.headers.set('x-middleware-static', '1')
    return response
  }

  if (pathname.startsWith('/preview/')) {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400')
    response.headers.set('CDN-Cache-Control', 'public, max-age=3600')
    return response
  }

  // Legacy URL redirects: /category → /dusk/category
  if (
    !pathname.startsWith('/_next') &&
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/blocks') &&
    !pathname.startsWith('/pages') &&
    !pathname.startsWith('/docs') &&
    !pathname.startsWith('/preview') &&
    !pathname.startsWith('/examples') &&
    !pathname.startsWith('/snippets') &&
    !pathname.startsWith('/og')
  ) {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length > 0 && !VALID_KITS.has(segments[0]) && CATEGORIES.has(segments[0])) {
      const newPath = `/dusk/${segments.join('/')}`
      return NextResponse.redirect(new URL(newPath, request.url), 308)
    }
  }

  return NextResponse.next()
}