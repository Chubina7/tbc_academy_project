"use server";

import { cookies } from "next/headers";

// User Data
export const getUserInfo = async () => {
  const cookieStore = cookies();
  const firstName = cookieStore.get("firstName").value;
  const lastName = cookieStore.get("lastName").value;
  const image = cookieStore.get("image").value;
  const gender = cookieStore.get("gender").value;

  return { firstName, lastName, image, gender };
};
export const getUserLoginInfo = async () => {
  const cookieStore = cookies();
  const email = cookieStore.get("email").value;

  return { email, password: "admin" };
};

// Preferences
export const setLngInCookies = (lng) => {
  cookies().set("lng", lng, { secure: true, sameSite: "none" });
};
export const setThemeInCookies = (pref) => {
  if (pref === "os") {
    cookies().delete("theme");
  } else {
    cookies().set("theme", pref, { secure: true, sameSite: "none" });
  }
};
