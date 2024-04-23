import React from "react";

function Instructions({ instructions, dict }) {
  const instructionsDict = dict.blog.blogDynamicItem.content.instructions;

  return (
    <div className="w-full flex justify-center items-start flex-col gap-2">
      <h1 className="text-xl md:text-2xl">{instructionsDict}: </h1>
      <ul className="flex flex-col gap-3">
        {instructions.map((instruction, idx) => (
          <li key={idx} className="w-full flex items-start justify-start gap-3">
            <strong>{idx + 1}.</strong>
            <p className="text-base md:text-lg">{instruction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Instructions;
