import React from "react";
import UserProfPic from "./UserProfPic";
import SearchInput from "./SearchInput";
import ThemeChanger from "../../../header/themeComponent/ThemeChanger";
import LangChanger from "../../../header/langComponent/LangChanger";

export default function HeaderSettings() {
  return (
    <div className="bg-white | flex justify-center items-center gap-5 p-3 py-2 rounded-full">
      <SearchInput />
      <ThemeChanger />
      <LangChanger />
      <UserProfPic />
    </div>
  );
}
