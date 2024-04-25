import React from "react";
import BlogsGrid from "../../../../components/blogComp/BlogsGrid";
import { getAllRecipes } from "../../../../lib/helpers";
import { getDictionary } from "../../../../lib/dictionary";

// Types
interface Props {
  params: IParams;
}

// Component
async function Blog({ params: { locale } }: Props) {
  const data = await getAllRecipes();
  const dictionary = await getDictionary(locale);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <BlogsGrid data={data} dict={dictionary} />
    </div>
  );
}

export default Blog;
