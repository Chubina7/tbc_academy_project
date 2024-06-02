"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../variables";
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
} from "../../sql/sqlQueries";

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
export const setSession = async (token: string) => {
  const options: Partial<ResponseCookie> = {
    secure: true,
    sameSite: "none",
    httpOnly: true,
    path: "/",
  };

  cookies().set(AUTH_COOKIE_KEY, token, options);
  // cookies().set("user_id", user_id, options);
};

// Admin actions
export const actDeleteUser = async (user_id: string) => {
  await psqlDeleteUser(user_id);
  revalidateTag("user_list");
};
export const actAddUser = async (userData: IUser) => {
  await psqlAddUser(userData);
  revalidateTag("user_list");
};
export const actEditUser = async (userData: IUser, user_id: string) => {
  await psqlEditUser(userData, user_id);
  revalidateTag("user_list");
};

// Bookmarking
export const actAddToBookmarks = async (resource_id: string) => {
  const count = 1;
  const user_id = cookies().get("user_id")?.value || ""

  try {
    await psqAddToBookmarks(user_id, resource_id, count);
    revalidateTag("bookmarks_list")
    revalidateTag("item_count")
  } catch (error) {
    console.error("Failed to add to bookmarks:", error);
  }
};
export const actIncreaseCount = async (resource_id: string) => {
  const user_id = cookies().get("user_id")?.value || ""
  try {
    await psqIncrementBookmarkCount(user_id, resource_id);
    revalidateTag("bookmarks_list")
    revalidateTag("item_count")
  } catch (error) {
    console.error("Failed to increment bookmark count:", error);
  }
};
export const actDecreaseCount = async (resource_id: string) => {
  const user_id = cookies().get("user_id")?.value || ""
  try {
    await psqDecrementBookmarkCount(user_id, resource_id);
    revalidateTag("bookmarks_list")
    revalidateTag("item_count")
  } catch (error) {
    console.error("Failed to decrement bookmark count:", error);
  }
};
export const actResetBookmarks = async () => {
  const user_id = cookies().get("user_id")?.value || "";

  try {
    await psqDeleteBookmarks(user_id);
    revalidateTag("bookmarks_list")
    revalidateTag("item_count")
  } catch (error) {
    console.error("Failed to delete bookmarks:", error);
  }
};
