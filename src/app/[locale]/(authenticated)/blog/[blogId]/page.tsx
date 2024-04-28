import React from "react";
import { getSingleRecipe } from "../../../../../lib/helpers";
import Heading from "../../../../../components/dynamicBlogComp/Heading";
import Content from "../../../../../components/dynamicBlogComp/content/Content";
import Suggestions from "../../../../../components/dynamicBlogComp/suggests/Suggestions";
import { unstable_setRequestLocale } from "next-intl/server";

// Types
interface Props {
  params: IParams;
}

// Static Generation
export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data: IRecipes = await res.json();

  return data.recipes.map((item) => ({ blogId: `${item.id}` }));
}

// Component
export default async function BlogItemPage({
  params: { blogId, locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const data = await getSingleRecipe(blogId);

  return (
    <div className="flex flex-col justify-start items-start">
      <Heading
        key={0}
        name={data.name}
        rating={data.rating}
        reviewCount={data.reviewCount}
        tags={data.tags}
        userId={data.userId}
      />
      <hr className="w-full border rounded-full bg-black" />
      <div className="w-full flex justify-center items-start flex-col xl:flex-row">
        <Content
          key={1}
          image={data.image}
          ingredients={data.ingredients}
          instructions={data.instructions}
          name={data.name}
          difficulty={data.difficulty}
          cuisine={data.cuisine}
          mealType={data.mealType}
          caloriesPerServing={data.caloriesPerServing}
          prepTimeMinutes={data.prepTimeMinutes}
        />
        <div className="w-full flex flex-col xl:py-9 xl:w-[40%]">
          <Suggestions key={2} tags={data.tags} originalName={data.name} />
        </div>
      </div>
    </div>
  );
}
