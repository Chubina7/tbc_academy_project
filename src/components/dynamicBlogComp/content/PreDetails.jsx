import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { MdFoodBank } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa";

function PreDetails({ difficulty, origin, type }) {
  // const difficultyLevel = difficulty === "Easy" && "text-green-700";
  let difficultyLevel;
  switch (difficulty) {
    case "Easy":
      difficultyLevel = "text-green-600";
      break;
    case "Hard":
      difficultyLevel = "text-red-600";
      break;
    default:
      difficultyLevel = "text-yellow-400";
  }

  return (
    <div className="w-full flex items-center justify-start gap-2 pb-2">
      <div className="flex gap-1 items-center opacity-80">
        <RiGlobalLine size={22} />
        <p>{origin}</p>
      </div>
      <div className="flex gap-1 items-center opacity-80">
        <MdFoodBank size={25} />
        {type.map((item, idx) => (
          <p key={idx}>
            {item}
            {type.length > 1 && idx !== type.length - 1 && " /"}
          </p>
        ))}
      </div>
      <div className="flex gap-1 items-center opacity-80">
        <FaCircleNotch size={20} />
        <p className={difficultyLevel}>{difficulty}</p>
      </div>
    </div>
  );
}

export default PreDetails;
