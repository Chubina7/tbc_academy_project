import React from "react";
import RouteHistory from "./RouteHistory";
import PageHeading from "./PageHeading";
import HeaderSettings from "./headerSettings/HeaderSettings";
// import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <header className="bg-inherit text-inherit | w-full flex flex-col justify-center items-center gap-3 lg:gap-1 py-3 pt-0 lg:pt-5 rounded-xl">
      <RouteHistory />
      <div className="w-full flex flex-col-reverse items-start justify-start gap-2 lg:flex-row lg:justify-between lg:items-center">
        <PageHeading />
        <HeaderSettings />
      </div>
    </header>
  );
}

export default Header;
