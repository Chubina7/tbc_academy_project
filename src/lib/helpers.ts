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
export async function getUsers() {
  const res = await fetch("http://localhost:3000/api/admin/get-users");
  const result: IUserPublics[] = await res.json()

  return result;
}
export async function addUser(userData: IUserPublics) {
  const res = await fetch("http://localhost:3000/api/admin/add-user", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  const result = await res.json()
  console.log(result)
}
export async function removeUser(user_id: string) {
  const res = await fetch("http://localhost:3000/api/admin/delete-user", {
    method: "POST",
    body: JSON.stringify({ user_id }),
  });
  const result = await res.json()
  console.log(result)
}
export async function editUser(user_id: string) {
  const res = await fetch("http://localhost:3000/api/admin/edit-user", {
    method: "POST",
    body: JSON.stringify({ user_id }),
  });
  const result = await res.json()
  console.log(result)
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