import { unstable_cache } from "next/cache";
import { psqlGetAllUsers, psqlGetBookmarkedItemCount, psqlGetBookmarks, psqlGetResources } from "./sqlQueries";

// Products
export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data: IProducts = await res.json();

  return data.products;
}
export async function getSingleProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data: IProduct = await res.json();

  return data;
}

// Recipies
export async function getAllRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data: IRecipes = await res.json();

  return data.recipes;
}
export async function getSingleRecipe(id: number) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data: IRecipe = await res.json();

  return data;
}
export async function getAllRecipesByTag(tag: string) {
  const res = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
  const data: IRecipes = await res.json();

  return data.recipes;
}

// Users
export async function getAuthor(id: number) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data: IUser = await res.json();

  return data;
}

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

// Validation
export function validateLogin(password: string, email: string) {
  if (password.length < 5 && password.trim() !== "") {
    return "Password length must be more than 5";
  } else if (email.split("@").length <= 1 && email.trim() !== "") {
    return "Email must include '@' symbol";
  } else if (!email.includes(".") && email.trim() !== "") {
    return "Email must include '.' symbol";
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