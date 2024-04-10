import React from "react";
import { getSingleRecipe } from "../../../lib/helpers";
import Heading from "../../../components/dynamicBlogComp/Heading";
import Content from "../../../components/dynamicBlogComp/content/Content";
import Suggestions from "../../../components/dynamicBlogComp/suggests/Suggestions";

export default async function BlogItemPage({ params }) {
  const data = await getSingleRecipe(params.blogId);

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
      <div className="w-full flex justify-center items-start flex-col lg:flex-row">
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
        <Suggestions />
      </div>
    </div>
  );
}
