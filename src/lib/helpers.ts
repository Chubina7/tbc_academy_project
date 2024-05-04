import { sql } from "@vercel/postgres";

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
export async function insertUserCredentials({ username, email, password }: IUserCredentials) {
  const user_id = generateUniqueId()
  // Store in auth table
  await sql`INSERT INTO user_credentials (user_id, username, email, password) VALUES (${user_id}, ${username}, ${email}, ${password});`;
  // Update public info table
  await sql`INSERT INTO user_publics (user_id, username, email)
            SELECT user_id, username, email FROM user_credentials
            ON CONFLICT (user_id) DO UPDATE
            SET username = EXCLUDED.username, email = EXCLUDED.email, user_id = EXCLUDED.user_id;`
}
export async function checkUserCredentials({ username, password }: { username: string, password: string }) {
  const data = await sql`SELECT * FROM user_credentials WHERE username = ${username} AND password = ${password}`
  return data.rows
}
export async function getUser(username: string) {
  const data = await sql`SELECT * FROM user_publics WHERE username = ${username}`
  return data.rows[0]
}

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
};

// Generators
export function generateUniqueId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = chars.length;
  let userID = '';

  for (let i = 0; i < 5; i++) {
    userID += chars.charAt(Math.floor(Math.random() * charactersLength));
  }

  return userID;
}


export function dbError() {
  // should get error code and show different text messages
}