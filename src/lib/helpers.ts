// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { i18n } from "../i18n";
// import { NextRequest } from "next/server";

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

// Preferences
// export const getLocale = (request: NextRequest) => {
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
//   const locales = i18n.locales;

//   const locale = match(languages, locales, i18n.defaultLocale);
//   return locale;
// };
export const setTheme = (pref: string) => {
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
};
