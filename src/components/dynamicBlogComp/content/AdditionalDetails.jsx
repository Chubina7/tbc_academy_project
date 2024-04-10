import React from "react";

function AdditionalDetails({ time, calories }) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-3">
      <h1 className="text-xl md:text-2xl">Other details: </h1>
      <div className="flex flex-col gap-2">
        <i>
          Cook Time: <strong>{time}</strong> minutes
        </i>
        <i>
          Calories per serving: <strong>{calories}</strong> ccal
        </i>
      </div>
    </div>
  );
}

export default AdditionalDetails;
