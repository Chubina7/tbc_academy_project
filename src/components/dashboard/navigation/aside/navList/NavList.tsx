import React from "react";
import { dashboardNavigationList } from "../../../../../lib/lists/ListsWithComponents";
import NavItem from "./NavItem";
import VariantsList from "../../../../ui/framerMotionDivs/variants/VariantsList";

export default function NavList() {
  return (
    <VariantsList className="xl:w-44 flex flex-col items-start justify-start gap-6 mx-2 transition-all duration-300">
      {dashboardNavigationList.map((route, idx) => (
        <NavItem key={idx} data={route} />
      ))}
    </VariantsList>
  );
}
