import { unstable_cache } from "next/cache";
import { psqlGetAllUsers } from "./sqlQueries";

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
);

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
export function generateUniqueId() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = chars.length;
  let userID = "";

  for (let i = 0; i < 5; i++) {
    userID += chars.charAt(Math.floor(Math.random() * charactersLength));
  }

  return userID;
}

export function dbError() {
  // should get error code and show different text messages
}
export function detectEnviro() {
  const enviro = process.env.NODE_ENV;
  if (enviro === "production") {
    return "https://tbc-accelerator-project.vercel.app";
  } else {
    return "http://localhost:3000";
  }
}

export async function getAllBookmarks() {
  const res = await fetch("http://localhost:3000/api/get-bookmark-list", {
    next: {
      revalidate: 0,
    },
  });
  const data = await res.json();

  return data.bookmarks;
}

export async function getAllRsources() {
  const res = await fetch("http://localhost:3000/api/get-resource-list");
  const data = await res.json();

  return data.resources;
}
