"use client";

import { useContext } from "react";
import { IoTrash } from "react-icons/io5";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

export default function DeleteBtn() {
  const { value, setValue } = useContext(ctx);

  return (
    <button
      className="flex gap-2 justify-center items-center text-red-600 disabled:opacity-60"
      onClick={() => setValue((prev) => ({ ...prev, profile_picture: null }))}
      disabled={value.profile_picture === null}
    >
      <IoTrash size={20} />
      <p>Delete exciting</p>
    </button>
  );
}
