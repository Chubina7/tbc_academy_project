import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY, defaultLocale, supportedLocales } from "./lib/variables";
import { cookies } from "next/headers";
import createMiddleware from "next-intl/middleware";
import { profileSegments } from "./components/dashboard/profile_page/logined_user_ui/ui/nav/Navigation";
import { decrypt } from "./lib/helpers/server_act_funcs/decrypt";

export default async function middleware(request: NextRequest) {
  const isSessionValid = await decrypt(cookies().get(AUTH_COOKIE_KEY)?.value || "")
  const path = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams

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

  // Secure "profile" route
  if (path === "/dashboard/profile") {
    request.nextUrl.pathname = "/dashboard";
    return NextResponse.redirect(request.nextUrl);
  }
  // Catch authenticated user profile page to show only edit page
  if (isSessionValid && path.includes(isSessionValid.user_id)) {
    if (path.startsWith("/dashboard/profile/") && !profileSegments.some(item => item.queryValue === searchParams.get("segment"))) {
      request.nextUrl.searchParams.set("segment", "personal_info")
      return NextResponse.redirect(request.nextUrl);
    }
  }

  // Locale rewrite middleware
  const localeRewrite = createMiddleware({
    locales: supportedLocales,
    defaultLocale: defaultLocale,
    localePrefix: "never",
  });

  // Finish
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
