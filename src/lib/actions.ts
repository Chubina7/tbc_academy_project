"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./variables";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { revalidateTag } from "next/cache";
import {
  psqlAddUser,
  psqlDeleteUser,
  psqlEditUser,
  psqAddToBookmarks,
  psqIncrementBookmarkCount,
  psqDecrementBookmarkCount,
  psqDeleteBookmarks,
} from "./sqlQueries";

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
  const options: Partial<ResponseCookie> = {
    secure: true,
    sameSite: "none",
    httpOnly: true,
    path: "/",
  };

  cookies().set(AUTH_COOKIE_KEY, "development_session_token", options);
  cookies().set("user_id", userId, options);
};

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
  return cookies().get(searchCookie)?.value;
};

// Admin actions
export const actDeleteUser = async (id: string) => {
  await psqlDeleteUser(id);
  revalidateTag("user_list");
};
export const actAddUser = async (formData: FormData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const age = formData.get("age");

  await psqlAddUser({ username, email, password, age });
  revalidateTag("user_list");
};
export const actEditUser = async (formData: FormData, user_id: string) => {
  const username = formData.get("username");
  const email = formData.get("email");
  let age = formData.get("age");
  if (age === "unknow" || age === "") age = null;
  await psqlEditUser({ username, email, age, user_id });
  revalidateTag("user_list");
};

// Bookmarking
export const actAddToBookmarks = async (resource_id: string) => {
  const count = 1;
  const user_id = "U1234" // change dinamicly

  try {
    await psqAddToBookmarks(user_id, resource_id, count);
    revalidateTag("bookmarks_list")
  } catch (error) {
    console.error("Failed to add to bookmarks:", error);
  }
};

export const actIncreaseCount = async (resource_id: string) => {
  const user_id = "U1234" // change dinamically
  try {
    await psqIncrementBookmarkCount(user_id, resource_id);
    revalidateTag("bookmarks_list")
  } catch (error) {
    console.error("Failed to increment bookmark count:", error);
  }
};

export const actDecreaseCount = async (resource_id: string) => {
  const user_id = "U1234" // change dinamically
  try {
    await psqDecrementBookmarkCount(user_id, resource_id);
    revalidateTag("bookmarks_list")
  } catch (error) {
    console.error("Failed to decrement bookmark count:", error);
  }
};

export const actResetBookmarks = async () => {
  const user_id = "U1234";
  try {
    await psqDeleteBookmarks({ user_id });
    revalidateTag("bookmarks_list")
  } catch (error) {
    console.error("Failed to delete bookmarks:", error);
  }
};
