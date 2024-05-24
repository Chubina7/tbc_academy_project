import { unstable_cache } from "next/cache";
import { psqlGetAllUsers, psqlGetBookmarkedItemCount, psqlGetBookmarks, psqlGetResources } from "./sqlQueries";

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

// Generators
export function generateUniqueId(indicator: string) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = chars.length;
  let userID = "";

  for (let i = 0; i < 4; i++) {
    userID += chars.charAt(Math.floor(Math.random() * charactersLength));
  }

  return indicator + userID;
}

// General
export function dbError() {
  // should get error code and show different text messages
}
export function detectEnviro() {
  const enviro = process.env.NODE_ENV;

  switch (enviro) {
    case "production":
      return "https://tbc-accelerator-project.vercel.app";
    case "development":
      return "http://localhost:3000";
    case "test":
      return "http://localhost:3000";
  }
}
export const minimumDatePrevention = () => {
  const today = new Date();
  const minimumDate = new Date(today.setFullYear(today.getFullYear() - 18));
  const minimumAge = minimumDate.toISOString().split("T")[0];

  return minimumAge;
};

// Validation
export function loginValidationMessage(email: string, password: string) {
  if (password.length < 5 && password.trim() !== "") {
    return "Password length must be more than 5";
  } else if (email.split("@").length <= 1 && email.trim() !== "") {
    return "Email must contain '@' symbol";
  } else if (!email.includes(".") && email.trim() !== "") {
    return "Email must contain '.' symbol";
  } else if (
    email.trim().charAt(email.length - 1) === "." &&
    email.trim() !== ""
  ) {
    return "Email must not end with '.' symbol";
  } else if (email.length < 5 && email.trim() !== "") {
    return "Email form is not valid";
  } else if (email.trim() === "" || password.trim() === "") {
    return "Sending empty values is not allowed";
  } else {
    return null;
  }
}
export const credentialsValidationMessage = (email: string, password: string, reTypedPass: string) => {
  if (password.length < 5 && password.trim() !== "") {
    return "Password length must be more than 5";
  } else if (email.split("@").length <= 1 && email.trim() !== "") {
    return "Email must contain '@' symbol";
  } else if (!email.includes(".") && email.trim() !== "") {
    return "Email must contain '.' symbol";
  } else if (
    email.trim().charAt(email.length - 1) === "." &&
    email.trim() !== ""
  ) {
    return "Email must not end with '.' symbol";
  } else if (email.length < 5 && email.trim() !== "") {
    return "Email form is not valid";
  } else if (email.trim() === "" || password.trim() === "") {
    return "Sending empty values is not allowed";
  } else if (password.trim() !== reTypedPass.trim()) {
    return "Passwords are not matching! Spell correctly";
  } else {
    return null;
  }
};