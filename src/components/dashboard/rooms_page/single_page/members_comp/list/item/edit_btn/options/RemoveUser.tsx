"use client";

import { useContext } from "react";
import { IoPersonRemove } from "react-icons/io5";
import { MemberSettingsDialogContext as ctx } from "../../../../../../../../../context/ctx";

interface Props {
  mocalHandler: () => void;
}

export default function RemoveUser({ mocalHandler }: Props) {
  const { setRemoveDialog } = useContext(ctx);

  const dialogHandler = () => {
    mocalHandler();
    setRemoveDialog(true);
  };

  return (
    <div
      className="w-full flex justify-start items-center gap-2 px-5 py-3 hover:bg-red-300 hover:dark:bg-[#5C5470] cursor-pointer"
      onClick={dialogHandler}
    >
      <IoPersonRemove size={20} />
      <p>Remove from room</p>
    </div>
  );
}
