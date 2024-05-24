import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY, defaultLocale, supportedLocales } from "./lib/variables";
import { cookies } from "next/headers";
import createMiddleware from "next-intl/middleware";

export default async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const path = request.nextUrl.pathname;

  // Check authentication
  if (path.startsWith("/dashboard")) {
    const isAuthenticated = cookieStore.has(AUTH_COOKIE_KEY);

    if (!isAuthenticated && path !== "/dashboard/login" && path !== "/dashboard/register") {
      request.nextUrl.pathname = "/dashboard/login";
      return NextResponse.redirect(request.nextUrl);
    }

    if (isAuthenticated && (path === "/dashboard/login" || path === "/dashboard/register")) {
      request.nextUrl.pathname = "/dashboard";
      return NextResponse.redirect(request.nextUrl);
    }
  }

  // Locale rewrite middleware
  const localeRewrite = createMiddleware({
    locales: supportedLocales,
    defaultLocale: defaultLocale,
    localePrefix: "never",
  });

  try {
    return localeRewrite(request);
  } catch (error) {
    console.error("Error in locale rewrite middleware:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
