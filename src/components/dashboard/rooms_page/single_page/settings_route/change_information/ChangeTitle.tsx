"use client";

import { useContext } from "react";
import { EditRoomInformationContext } from "../../../../../../context/ctx";

export default function ChangeTitle() {
  const { details, setDetails } = useContext(EditRoomInformationContext);
  return (
    <input
      className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      type="text"
      placeholder="Room title"
      value={details.title}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, title: e.target.value }))
      }
    />
  );
}
