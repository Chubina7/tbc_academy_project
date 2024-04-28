import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { AUTH_COOKIE_KEY, defaultLocale, supportedLocales } from './lib/variables';
import { cookies } from 'next/headers';

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const ka = supportedLocales[0];
  const en = supportedLocales[1];

  // Checking authentification
  if (
    !cookies().has(AUTH_COOKIE_KEY) &&
    (path === `/${en}` ||
      path.startsWith(`/${en}/products`) ||
      path.startsWith(`/${en}/blog`) ||
      path === `/${en}/contact` ||
      path === `/${en}/profile` ||
      path === `/${ka}` ||
      path.startsWith(`/${ka}/products`) ||
      path.startsWith(`/${ka}/blog`) ||
      path === `/${ka}/contact` ||
      path === `/${ka}/profile`)
  ) {
    request.nextUrl.pathname = "/login"
  }

  // Rewriting on the supported language
  const localeRewrite = createIntlMiddleware({
    locales: supportedLocales,
    defaultLocale: defaultLocale,
  });
  const response = localeRewrite(request);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};