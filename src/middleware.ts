import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If the URL starts with /setup/, rewrite it to the home page
  if (request.nextUrl.pathname.startsWith('/setup/')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/setup/:slug*'
} 