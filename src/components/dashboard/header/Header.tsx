import React from "react";
import RouteHistory from "./RouteHistory";
import PageHeading from "./PageHeading";
import HeaderSettings from "./headerSettings/HeaderSettings";
// import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <header className="bg-inherit text-inherit | w-full flex flex-col justify-center items-center gap-3 py-3 px-3 md:px-7 rounded-xl">
      <RouteHistory />
      <div className="relative z-50 w-full flex flex-col-reverse items-start justify-start lg:flex-row lg:justify-between lg:items-center gap-2">
        <PageHeading />
        <HeaderSettings />
      </div>
    </header>
  );
}

export default Header;
