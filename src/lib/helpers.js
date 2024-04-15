// // // // // Products // // // // //
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

// // // // // Recipies // // // // //
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

// // // // // Users // // // // //
export async function getAuthor(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();

  return data;
}
