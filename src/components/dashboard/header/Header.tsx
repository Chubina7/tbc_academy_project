import React from "react";
import RouteHistory from "./RouteHistory";
import PageHeading from "./PageHeading";
import SearchInput from "./SearchInput";
import UserProfPic from "./UserProfPic";
import ThemeChanger from "../../header/themeComponent/ThemeChanger";
import LangChanger from "../../header/langComponent/LangChanger";

function Header() {
  return (
    <header className="bg-inherit text-inherit | w-full flex justify-between items-center py-3 pt-5 rounded-xl">
      <div className="flex flex-col justify-center items-start gap-2">
        <RouteHistory />
        <PageHeading />
      </div>
      <div className="bg-white | flex justify-center items-center gap-3 p-3 py-2 rounded-full">
        <SearchInput />
        <ThemeChanger />
        <LangChanger />
        <UserProfPic />
      </div>
    </header>
  );
}

export default Header;
