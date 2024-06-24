import { unstable_cache } from "next/cache";
import { psqlGetAllUsers } from "../../sql/sqlQueries";

// sql
export const getUsers = unstable_cache(
  async () => {
    const data = await psqlGetAllUsers();
    return data;
  },
  ["user_list"],
  { tags: ["user_list"] }
)

// Preferences
export function setTheme(pref: string) {
  if (pref === "os") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add(pref);
  }
}