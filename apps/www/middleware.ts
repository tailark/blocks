import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle Chrome DevTools and similar special paths
  if (request.nextUrl.pathname.startsWith('/.well-known/')) {
    // Return a 404 response for these paths
    return new NextResponse(null, { status: 404 })
  }

  // Handle sourcemap requests
  if (request.nextUrl.pathname.endsWith('.map')) {
    const response = NextResponse.next()
    response.headers.set('Content-Type', 'application/json')
    return response
  }

  // Handle preview routes with caching
  if (request.nextUrl.pathname.startsWith('/preview/')) {
    const response = NextResponse.next()
    
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400')
    response.headers.set('CDN-Cache-Control', 'public, max-age=3600')
    
    return response
  }
}