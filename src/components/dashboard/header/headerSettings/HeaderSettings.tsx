import React from "react";
import UserProfPic from "./UserProfPic";
import SearchInput from "./SearchInput";
import ThemeChanger from "../../../header/themeComponent/ThemeChanger";
import LangChanger from "../../../header/langComponent/LangChanger";
import Bookmark from "./bookmark/Bookmark";

export default function HeaderSettings() {
  return (
    <div className="bg-white | flex justify-center items-center gap-5 p-3 py-2 rounded-full">
      <SearchInput />
      <ThemeChanger />
      <LangChanger />
      <Bookmark />
      {/* ნოტიფიკაციები ან რაიმე მსგავსი; შესაძლებელია ჩამოსაშლელი ფანჯარა ბოლო 3 აითემით */}
      <UserProfPic />
    </div>
  );
}
