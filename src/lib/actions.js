"use server";

import { cookies } from "next/headers";
import { getUserAuth } from "./helpers";
import { AUTH_COOKIE_KEY } from "./variables";

// Auth
export const signIn = async (formData) => {
  const data = await getUserAuth({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  cookies().set(AUTH_COOKIE_KEY, data.token, {
    secure: true,
    sameSite: "none",
  });
  cookies().set("id", data.id, { secure: true, sameSite: "none" });
  cookies().set("email", data.email, { secure: true, sameSite: "none" });
  cookies().set("firstName", data.firstName, {
    secure: true,
    sameSite: "none",
  });
  cookies().set("lastName", data.lastName, { secure: true, sameSite: "none" });
  cookies().set("gender", data.gender, { secure: true, sameSite: "none" });
  cookies().set("image", data.image, { secure: true, sameSite: "none" });
};
export const signOut = async () => {
  cookies().delete("id");
  cookies().delete(AUTH_COOKIE_KEY);
  cookies().delete("email");
  cookies().delete("firstName");
  cookies().delete("lastName");
  cookies().delete("gender");
  cookies().delete("image");
};

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
