"use client";

import React from "react";
import { dashboardNavigationList } from "../../../lib/lists/ListsWithComponents";
import { usePathname } from "next/navigation";
import TopToDown from "../../ui/framerMotionDivs/directions/TopToDown";

export default function PageHeading() {
  const path = usePathname();
  const heading = dashboardNavigationList.find(
    (item) => item.href === path.substring(10)
  );

  return (
    <TopToDown>
      <h1 className="text-2xl sm:text-3xl font-bold">{heading?.forHeading}</h1>
    </TopToDown>
  );
}
