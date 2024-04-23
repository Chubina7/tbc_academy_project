import React from "react";
import Image from "next/image";
import Ingredients from "../Ingredients";
import fallback_img from "../../../../public/anonym_user.webp";
import PreDetails from "./PreDetails";

function Intro({ image, name, ingredients, difficulty, origin, type, dict }) {
  const ingredientsDict = dict.blog.blogDynamicItem.content.ingredients;

  return (
    <div className="w-full flex justify-start items-start flex-col md:flex-row gap-4 lg:gap-8">
      <div className="w-full lg:w-auto max-h-full flex justify-center items-center ">
        <Image
          className="rounded-md object-cover md:h-full"
          src={image ? image : fallback_img}
          alt={name}
          width={420}
          height={340}
        />
      </div>
      <hr className="md:hidden w-full border rounded-full bg-black" />
      <div className="w-full lg:w-auto flex flex-col gap-2">
        <PreDetails difficulty={difficulty} origin={origin} type={type} />
        <hr className="md:hidden w-full border rounded-full bg-black" />
        <h1 className="text-xl md:text-2xl">{ingredientsDict}: </h1>
        <Ingredients list={ingredients} />
      </div>
    </div>
  );
}

export default Intro;
