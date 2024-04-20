import { NextResponse } from "next/server";
import { i18n } from "../i18.config";
import { getLocale } from "../lib/helpers";
import { cookies } from "next/headers";

export function internationalization(middleware) {
  return async function (request, event) {
    const { pathname } = request.nextUrl;
    const inCookie = cookies().get("lng")?.value;
    const pathnameHasLocale = i18n.locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
      if (inCookie) {
        request.nextUrl.pathname = `/${inCookie}${pathname}`;
      } else {
        const locale = getLocale(request);
        request.nextUrl.pathname = `/${locale}${pathname}`;
      }

      return NextResponse.redirect(request.nextUrl);
    }

    return middleware(request, event);
  };
}
