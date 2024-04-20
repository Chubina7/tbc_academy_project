import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../lib/variables";
import { NextResponse } from "next/server";

export function auth(middleware) {
  return async function (request, event) {
    const path = request.nextUrl.pathname;
    if (
      !cookies().has(AUTH_COOKIE_KEY) &&
      (path === "/" ||
        path.startsWith("/products") ||
        path.startsWith("/blog") ||
        path === "/contact" ||
        path === "/profile")
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return middleware(request, event);
  };
}
