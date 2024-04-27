import React from "react";

interface Props {
  time: number;
  calories: number | undefined;
}

function AdditionalDetails({ time, calories }: Props) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-3">
      <h1 className="text-xl md:text-2xl">{"dict.default.otherDetails"}: </h1>
      <div className="flex flex-col gap-2">
        <i>
          {"dict.blog.blogDynamicItem.content.cookTime"}:{" "}
          <strong>{time}</strong> {"dict.default.time.minute"}
        </i>
        <i>
          {"dict.blog.blogDynamicItem.content.calories"}:{" "}
          <strong>{calories}</strong> {"dict.default.measurement.calories"}
        </i>
      </div>
    </div>
  );
}

export default AdditionalDetails;
