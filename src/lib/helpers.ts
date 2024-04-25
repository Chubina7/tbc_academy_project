import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "../i18.config";

// Products
export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return data.products;
}
export async function getSingleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return data;
}

// Recipies
export async function getAllRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  return data.recipes;
}
export async function getSingleRecipe(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();

  return data;
}
export async function getAllRecipesByTag(tag) {
  const res = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
  const data = await res.json();

  return data.recipes;
}

// Users
export async function getAuthor(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();

  return data;
}

// Preferences
export const getLocale = (request) => {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = i18n.locales;

  const locale = match(languages, locales, i18n.defaultLocale);
  return locale;
};
export const setTheme = (pref) => {
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
