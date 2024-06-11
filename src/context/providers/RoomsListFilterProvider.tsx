"use client";

import React, { ReactNode, useState } from "react";
import { RoomsListFilterContext } from "../ctx";

interface Props {
  children: ReactNode;
}

export default function RoomsListFilterProvider({ children }: Props) {
  const [selectedCategories, setSelectedCategories] = useState(["all"]);

  return (
    <RoomsListFilterContext.Provider
      value={{ selectedCategories, setSelectedCategories }}
    >
      {children}
    </RoomsListFilterContext.Provider>
  );
}
