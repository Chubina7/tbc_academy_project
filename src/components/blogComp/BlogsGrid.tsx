import React from "react";
import BlogItem from "./BlogItem";

export default function BlogsGrid({ data, dict }) {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-16">
      {data.map((item) => (
        <BlogItem
          key={item.id}
          id={item.id}
          title={item.name}
          imgSrc={item.image}
          portion={item.servings}
          rating={item.rating}
          time={item.prepTimeMinutes}
          difficulty={item.difficulty}
          mealType={item.mealType}
          tags={item.tags}
          dict={dict}
        />
      ))}
    </div>
  );
}
