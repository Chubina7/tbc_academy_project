import React from "react";
import SuggestItem from "./SuggestItem";
import Link from "next/link";
import { getAllRecipesByTag } from "../../../lib/helpers";

async function Suggestions({ tags, originalName }) {
  const rand = Math.floor(Math.random() * (tags.length - 1)) + 1;
  const data = await getAllRecipesByTag(tags[rand]);

  return (
    <>
      <h1 className="text-3xl">
        Similar recipes from <i>#{tags[rand]}</i>
      </h1>
      <br />
      <div className="w-full max-w-lg mx-auto p-7 flex flex-col items-start gap-6">
        {data.map((item) => {
          if (item.name !== originalName) {
            return (
              <Link key={item.id} href={`/blog/${item.id}`}>
                <SuggestItem
                  difficulty={item.difficulty}
                  image={item.image}
                  name={item.name}
                  prepTimeMinutes={item.prepTimeMinutes}
                  rating={item.rating}
                />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}

export default Suggestions;