import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
// import { i18n } from "../i18n";
import { getLocale } from "../lib/helpers";
import { cookies } from "next/headers";

export function internationalization(middleware: NextMiddleware) {
  return async function (request: NextRequest, event: NextFetchEvent) {
    const { pathname } = request.nextUrl;
    const inCookie = cookies().get("lng")?.value;

    const pathnameHasLocale = ["ka", "en"].some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
      const newLocale = inCookie || getLocale(request);
      request.nextUrl.pathname = `/${newLocale}${pathname}`;
      return NextResponse.redirect(request.nextUrl);
    }

    return middleware(request, event);
  };
}
