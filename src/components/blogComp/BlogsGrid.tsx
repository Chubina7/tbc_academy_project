import React from "react";
import BlogItem from "./BlogItem";

export default function BlogsGrid({ data }: { data: Array<IRecipe> }) {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-16">
      {data.map((item) => (
        <BlogItem
          key={item.id}
          name={item.name}
          servings={item.servings}
          image={item.image}
          rating={item.rating}
          prepTimeMinutes={item.prepTimeMinutes}
          difficulty={item.difficulty}
          mealType={item.mealType}
          tags={item.tags}
        />
      ))}
    </div>
  );
}
