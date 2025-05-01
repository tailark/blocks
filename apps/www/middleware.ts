import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/preview/')) {
    const response = NextResponse.next()
    
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400')
    response.headers.set('CDN-Cache-Control', 'public, max-age=3600')
    
    return response
  }
}