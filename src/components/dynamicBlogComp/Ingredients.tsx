import React from "react";
import { FaDotCircle } from "react-icons/fa";

function Ingredients({ list }) {
  return (
    <ul className="flex flex-col justify-start items-start gap-2">
      {list.map((ingredient, idx) => (
        <li key={idx} className="w-full flex items-center justify-start gap-3">
          <FaDotCircle size={10} opacity={0.6} />
          <p className="text-base md:text-lg">{ingredient}</p>
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
