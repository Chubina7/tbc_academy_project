import React from "react";
import RouteHistory from "./RouteHistory";
import PageHeading from "./PageHeading";
import HeaderSettings from "./headerSettings/HeaderSettings";
// import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <header className="bg-inherit text-inherit | w-full flex flex-col justify-center items-center py-3 pt-5 rounded-xl">
      {/* <Navigation type="mobile" /> */}
      <RouteHistory />
      <div className="w-full flex justify-between items-center">
        <PageHeading />
        <HeaderSettings />
      </div>
    </header>
  );
}

export default Header;
