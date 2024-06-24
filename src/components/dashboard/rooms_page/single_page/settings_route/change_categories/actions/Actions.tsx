"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";
import { arraysEqual } from "../../../../../../../lib/helpers/regular_funcs/general";
import ResetBtn from "./ResetBtn";
import SaveBtn from "./SaveBtn";

interface Props {
  prevData: Array<string>;
}

export default function Actions({ prevData }: Props) {
  const { categories } = useContext(ctx);

  if (arraysEqual(prevData, categories)) return null;

  return (
    <div className="w-full flex gap-4 justify-end items-center text-sm font-bold">
      <ResetBtn />
      <SaveBtn />
    </div>
  );
}
