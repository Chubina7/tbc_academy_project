import { unstable_cache } from "next/cache";
import { psqlGetAllUsers, psqlGetBookmarkedItemCount, psqlGetBookmarks, psqlGetResources } from "../../sql/sqlQueries";

// sql
export const getUsers = unstable_cache(
  async () => {
    const data = await psqlGetAllUsers();
    return data;
  },
  ["user_list"],
  { tags: ["user_list"] }
)
export const getResouces = unstable_cache(
  async () => {
    const data = await psqlGetResources();
    return data;
  },
  ["resources_list"],
  { tags: ["resources_list"] }
)
export const getBookmarks = unstable_cache(
  async (user_id: string) => {
    const data = await psqlGetBookmarks(user_id);
    return data;
  },
  ["bookmarks_list"],
  { tags: ["bookmarks_list"] }
)
export const getBookmarkedItemCount = unstable_cache(
  async (user_id, resource_id) => {
    const result = await psqlGetBookmarkedItemCount(user_id, resource_id)
    return result
  }, ["item_count"], { tags: ["item_count"] }
)

// Preferences
export function setTheme(pref: string) {
  if (pref === "os") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  } else {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add(pref);
    localStorage.setItem("theme", pref);
  }
}
