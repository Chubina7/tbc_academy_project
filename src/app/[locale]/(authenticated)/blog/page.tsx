import React from "react";
import BlogsGrid from "../../../../components/blogComp/BlogsGrid";
import { getAllRecipes } from "../../../../lib/helpers";

async function Blog() {
  const data = await getAllRecipes();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <BlogsGrid data={data} />
    </div>
  );
}

export default Blog;
