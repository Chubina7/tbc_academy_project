import React from "react";

function AdditionalDetails({ time, calories, dict }) {
  const cookTime = dict.blog.blogDynamicItem.content.cookTime;
  const caloriesDict = dict.blog.blogDynamicItem.content.calories;
  const min = dict.default.time.minute;
  const caloriesSize = dict.default.measurement.calories;
  const details = dict.default.otherDetails;

  return (
    <div className="w-full flex flex-col items-start justify-start gap-3">
      <h1 className="text-xl md:text-2xl">{details}: </h1>
      <div className="flex flex-col gap-2">
        <i>
          {cookTime}: <strong>{time}</strong> {min}
        </i>
        <i>
          {caloriesDict}: <strong>{calories}</strong> {caloriesSize}
        </i>
      </div>
    </div>
  );
}

export default AdditionalDetails;
