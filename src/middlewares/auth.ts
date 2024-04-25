import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../lib/variables";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { i18n } from "../i18.config";

export function auth(middleware: NextMiddleware) {
  return async function (request: NextRequest, event: NextFetchEvent) {
    const ge = i18n.locales[0];
    const en = i18n.locales[1];
    const path = request.nextUrl.pathname;

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
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return middleware(request, event);
  };
}
