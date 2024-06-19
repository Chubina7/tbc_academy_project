"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../context/ctx";

export default function ErrorMsg() {
  const { errorMsg } = useContext(ctx);

  if (errorMsg === "") return null;

  return <p className="text-red-600 text-sm">{errorMsg}</p>;
}
