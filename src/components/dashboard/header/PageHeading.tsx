"use client";

import React from "react";
import { dashboardNavigationList } from "../../../lib/ListsWithComponents";
import { usePathname } from "next/navigation";

export default function PageHeading() {
  const path = usePathname();
  const heading = dashboardNavigationList.find(
    (item) => item.href === path.substring(10)
  );

  return <h1 className="text-2xl sm:text-3xl font-bold">{heading?.forHeading}</h1>;
}
