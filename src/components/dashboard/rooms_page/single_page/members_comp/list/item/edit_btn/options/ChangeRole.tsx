"use client";

import { useContext } from "react";
import { IoRefreshCircle } from "react-icons/io5";
import { MemberSettingsDialogContext as ctx } from "../../../../../../../../../context/ctx";

interface Props {
  onClick: () => void;
}

export default function ChangeRole({ onClick }: Props) {
  const { setRoleDialog } = useContext(ctx);

  const dialogHandler = () => {
    onClick();
    setRoleDialog(true);
  };

  return (
    <div
      className="w-full flex justify-start items-center gap-2 px-5 py-3 hover:bg-red-300 hover:dark:bg-[#5C5470] cursor-pointer"
      onClick={dialogHandler}
    >
      <IoRefreshCircle size={20} />
      <p>Change role</p>
    </div>
  );
}
