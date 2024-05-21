import React from "react";
import { dashboardNavigationList } from "../../../../../lib/ListsWithComponents";
import NavItem from "./NavItem";

export default function NavList() {
  return (
    <ul className="xl:w-44 flex flex-col items-start justify-start gap-6 mx-2 transition-all duration-300">
      {dashboardNavigationList.map((route, idx) => (
        <NavItem key={idx} data={route} />
      ))}
    </ul>
  );
}
