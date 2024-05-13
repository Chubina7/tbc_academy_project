import React from "react";
import UserProfPic from "./UserProfPic";
import SearchInput from "./SearchInput";
import ThemeChanger from "../../../header/themeComponent/ThemeChanger";
import LangChanger from "../../../header/langComponent/LangChanger";
import Bookmark from "./bookmark/Bookmark";
import Navigation from "../../navigation/Navigation";

export default function HeaderSettings() {
  return (
    <div className="bg-[#FFFFFF] text-[#2B3674] dark:bg-[#352F44] dark:text-[#DBD8E3] | flex w-full justify-between lg:w-fit lg:justify-center items-center lg:gap-5 p-3 py-2 rounded-full transition-all duration-300">
      <SearchInput />
      <div className="hidden sm:flex justify-center items-center gap-5">
        <ThemeChanger />
        <LangChanger />
        <Bookmark />
        {/* ნოტიფიკაციები ან რაიმე მსგავსი; შესაძლებელია ჩამოსაშლელი ფანჯარა ბოლო 3 აითემით */}
        <UserProfPic />
      </div>
      <Navigation type="mobile" />
    </div>
  );
}
