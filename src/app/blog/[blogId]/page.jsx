import React from "react";
import { getSingleRecipe } from "../../../lib/helpers";

export default async function BlogItemPage({ params }) {
  const data = await getSingleRecipe(params.blogId);

  return <div>{data.name}</div>;
}
