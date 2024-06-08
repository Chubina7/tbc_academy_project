"use client";

import { useEffect, useState } from "react";
import ChangeRole from "./options/ChangeRole";
import RemoveUser from "./options/RemoveUser";
import SeeProfile from "./options/SeeProfile";

interface Props {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Modal({ state }: Props) {
  // track and change direction of modal opening
  const [shouldChangeDir, setShouldChangeDir] = useState(false);
  const calculateDistance = () => {
    const seeAllBtn = document.getElementById("see_all_btn");
    const threeDots = document.getElementById("three_dots");

    if (seeAllBtn && threeDots) {
      const seeAllBtnTop = seeAllBtn.getBoundingClientRect().top;
      const threeDotsTop = threeDots.getBoundingClientRect().top;

      if (seeAllBtnTop - threeDotsTop < 200) {
        setShouldChangeDir(true);
      } else {
        setShouldChangeDir(false);
      }
    }
  };
  useEffect(() => {
    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  if (!state[0]) return null;

  return (
    <div
      className={`bg-[#FFFFFF] dark:bg-[#352F44] text-inherit rounded-lg text-nowrap overflow-hidden | absolute ${
        shouldChangeDir ? "bottom-[10px]" : "top-[10px]"
      } right-0 | flex flex-col justify-center items-start | transition-colors duration-300 | shadow-custom select-none`}
    >
      <ChangeRole onClick={() => state[1]((prev) => !prev)} />
      <RemoveUser onClick={() => state[1]((prev) => !prev)} />
      <SeeProfile />
    </div>
  );
}
