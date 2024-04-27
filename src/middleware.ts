import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { AUTH_COOKIE_KEY } from './lib/variables';
import { cookies } from 'next/headers';
import { locales } from './i18n';

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const en = locales[0];
  const ge = locales[1];

  // Checking authentification
  if (
    !cookies().has(AUTH_COOKIE_KEY) &&
    (path === `/${en}` ||
      path.startsWith(`/${en}/products`) ||
      path.startsWith(`/${en}/blog`) ||
      path === `/${en}/contact` ||
      path === `/${en}/profile` ||
      path === `/${ge}` ||
      path.startsWith(`/${ge}/products`) ||
      path.startsWith(`/${ge}/blog`) ||
      path === `/${ge}/contact` ||
      path === `/${ge}/profile`)
  ) {
    request.nextUrl.pathname = "/login"
  }

  // Rewriting on the supported language
  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    defaultLocale: "ka",
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};