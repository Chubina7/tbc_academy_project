"use client";

import { useContext } from "react";
import { AddNewRoomContext } from "../../../../../../../context/ctx";
import { settingUpNewRoomSteps } from "../../../../../../../lib/lists/ListsWithComponents";
import OnMobile from "./OnMobile";
import OnDesktop from "./OnDesktop";

export default function Steps() {
  const { steps } = useContext(AddNewRoomContext);

  return (
    <div className="w-full flex sm:flex-row justify-center items-center gap-5 px-4 sm:pb-4">
      {settingUpNewRoomSteps.map((item, idx) => (
        <div
          key={idx}
          className={`w-full sm:w-fit lg:bg-[#2B3674] lg:text-[#F4F7FF] lg:dark:bg-[#5C5470] | flex flex-row-reverse sm:flex-col justify-center items-center gap-2 p-3 sm:px-6 rounded-xl transition-all duration-300 select-none ${
            idx <= steps.activeIdx
              ? "opacity-100 scale-105"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <OnDesktop data={item} />
          <OnMobile condition={steps.activeIdx >= idx} />
        </div>
      ))}
    </div>
  );
}
