import React from "react";
import Intro from "./Intro";
import Instructions from "./Instructions";
import AdditionalDetails from "./AdditionalDetails";

interface Props {
  image: string;
  name: string;
  ingredients: Array<string> | undefined;
  instructions: Array<string> | undefined;
  difficulty: string;
  cuisine: string | undefined;
  mealType: Array<string>;
  caloriesPerServing: number | undefined;
  prepTimeMinutes: number;
  dict: ITranslation;
}

function Content({
  image,
  name,
  ingredients,
  instructions,
  difficulty,
  cuisine,
  mealType,
  caloriesPerServing,
  prepTimeMinutes,
  dict,
}: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-start lg:items-center gap-9 py-9">
      <Intro
        key={0}
        name={name}
        image={image}
        ingredients={ingredients}
        difficulty={difficulty}
        origin={cuisine}
        type={mealType}
        dict={dict}
      />
      <hr className="w-full border rounded-full bg-black" />
      <Instructions key={1} instructions={instructions} dict={dict} />
      <hr className="w-full border rounded-full bg-black" />
      <AdditionalDetails
        key={2}
        calories={caloriesPerServing}
        time={prepTimeMinutes}
        dict={dict}
      />
      <hr className="xl:hidden w-full border rounded-full bg-black" />
    </div>
  );
}

export default Content;
