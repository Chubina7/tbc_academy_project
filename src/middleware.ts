import { NextRequest } from 'next/server';
import { AUTH_COOKIE_KEY, defaultLocale, supportedLocales } from './lib/variables';
import { cookies } from 'next/headers';
import createMiddleware from 'next-intl/middleware';

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // const ka = supportedLocales[0];
  // const en = supportedLocales[1];

  // Checking authentification
  if (
    !cookies().has(AUTH_COOKIE_KEY) &&
    (path === `/` ||
      path.startsWith(`/products`) ||
      path.startsWith(`/blog`) ||
      path === `/contact` ||
      path === `/profile` ||
      path === `/` ||
      path.startsWith(`/products`) ||
      path.startsWith(`/blog`) ||
      path === `/contact` ||
      path === `/profile`)
  ) {
    request.nextUrl.pathname = "/login"
  }

  // Rewriting on the supported language
  const localeRewrite = createMiddleware({
    locales: supportedLocales,
    defaultLocale: defaultLocale,
    localePrefix: 'never'
  });
  const response = localeRewrite(request);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};