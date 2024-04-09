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
