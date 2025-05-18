import { NextRequest, NextResponse } from 'next/server'

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

export function middleware(request: NextRequest) {
  const isStaticAsset = request.nextUrl.pathname.match(
    /\.(js|mjs|css|json|png|jpg|jpeg|gif|webp|ico|svg|map)$/
  )

  if (isStaticAsset) {
    const response = NextResponse.next()
    response.headers.set('x-middleware-static', '1')
    return response
  }

  if (request.nextUrl.pathname.startsWith('/preview/')) {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400')
    response.headers.set('CDN-Cache-Control', 'public, max-age=3600')
    return response
  }

  return NextResponse.next()
}