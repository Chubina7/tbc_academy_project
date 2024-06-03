import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY, defaultLocale, supportedLocales } from "./lib/variables";
import { cookies } from "next/headers";
import createMiddleware from "next-intl/middleware";
import { jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.JWT_SECRET_SIGN_KEY)
const algorithm = process.env.JWT_ALGORITHM

export async function decrypt(token: string) {
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: [`${algorithm}`] });
    return payload
  } catch (error) {
    return false
  }
}

export default async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const path = request.nextUrl.pathname;
  const isSessionValid = await decrypt(cookieStore.get(AUTH_COOKIE_KEY)?.value || "")

  // Check authentication
  if (path.startsWith("/dashboard")) {
    if (!isSessionValid && path !== "/dashboard/login" && path !== "/dashboard/register") {
      request.nextUrl.pathname = "/dashboard/login";
      return NextResponse.redirect(request.nextUrl);
    }
    if (isSessionValid && (path === "/dashboard/login" || path === "/dashboard/register")) {
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
