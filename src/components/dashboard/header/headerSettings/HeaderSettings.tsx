import React from "react";
import SearchInput from "./SearchInput";
import ThemeChanger from "../../../ui/themePreference/ThemeChanger";
import LangChanger from "../../../ui/languagePreference/LangChanger";
import Bookmark from "./bookmark/Bookmark";
import Navigation from "../../navigation/Navigation";
import TopToDown from "../../../ui/framerMotionDivs/directions/TopToDown";
import UserIcon from "../../user/profile_icon/UserIcon";

export default function HeaderSettings() {
  return (
    <TopToDown className="w-full lg:w-fit">
      <div className="bg-[#FFFFFF] text-[#2B3674] dark:bg-[#352F44] dark:text-[#DBD8E3] | flex justify-between w-full lg:w-fit lg:justify-center items-center lg:gap-5 p-3 py-2 rounded-full transition-colors duration-300 shadow-custom">
        <SearchInput />
        <div className="hidden sm:flex justify-center items-center gap-5">
          <ThemeChanger />
          <LangChanger />
          <Bookmark />
          <UserIcon />
        </div>
        <Navigation type="mobile" />
      </div>
    </TopToDown>
  );
}
