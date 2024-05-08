"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./variables";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

// User Data
export const getUserInfo = async () => {
  const cookieStore = cookies();
  const firstName = cookieStore.get("firstName")?.value;
  const lastName = cookieStore.get("lastName")?.value;
  const image = cookieStore.get("image")?.value;
  const gender = cookieStore.get("gender")?.value;

  return { firstName, lastName, image, gender };
};
export const getUserLoginInfo = async () => {
  const cookieStore = cookies();
  const email = cookieStore.get("email")?.value;

  return { email, password: "admin" };
};
export const setSession = async (userId: string) => {
  const options: Partial<ResponseCookie> = { secure: true, sameSite: "none", httpOnly: true, path: "/" };

  cookies().set(AUTH_COOKIE_KEY, "development_session_token", options);
  cookies().set("user_id", userId, options);
}

// Preferences
export const storeThemeInCookies = (pref: string) => {
  if (pref === "os") {
    cookies().delete("theme");
  } else {
    cookies().set("theme", pref, { secure: true, sameSite: "none" });
  }
};

// General
export const readCookieForClient = async (searchCookie: string) => {
  return cookies().get(searchCookie)?.value
}
