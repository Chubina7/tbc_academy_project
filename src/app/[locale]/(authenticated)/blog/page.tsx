import React from "react";
import BlogsGrid from "../../../../components/blogComp/BlogsGrid";
import { getAllRecipes } from "../../../../lib/helpers";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: IParams;
}

async function Blog({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const data = await getAllRecipes();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <BlogsGrid data={data} />
    </div>
  );
}

export default Blog;
