"use client";

import React from "react";
import { dashboardNavigationList } from "../../../lib/componentLists";
import { usePathname } from "next/navigation";

export default function PageHeading() {
  const path = usePathname();
  const heading = dashboardNavigationList.find(
    (item) => item.href === path.substring(10)
  );

  return <h1 className="text-4xl font-bold">{heading?.forHeading}</h1>;
}
