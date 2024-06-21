"use client";

import { IoTrashOutline } from "react-icons/io5";

interface Props {
  announcement_id: string;
}

export default function DeleteBtn({ announcement_id }: Props) {
  const handleDelete = () => {
    console.log("deleting ", announcement_id);
    // announcement deleting logic
  };

  return (
    <div className="w-full flex justify-end">
      <button onClick={handleDelete}>
        <IoTrashOutline size={20} color="red" />
      </button>
    </div>
  );
}
