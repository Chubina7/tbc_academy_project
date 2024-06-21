"use client";

import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

interface Props {
  excitingCtg: string;
}

export default function RemoveCtg({ excitingCtg }: Props) {
  const { handleCtgRemove } = useContext(ctx);

  return (
    <IoClose
      size={18}
      className="cursor-pointer"
      onClick={() => handleCtgRemove(excitingCtg)}
    />
  );
}
