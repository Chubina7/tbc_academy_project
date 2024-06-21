"use client";

import { useContext } from "react";
import { EditRoomInformationContext } from "../../../../../../context/ctx";

export default function ChangeDescription() {
  const { details, setDetails } = useContext(EditRoomInformationContext);

  return (
    <textarea
      className="border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      placeholder="This is a course about..."
      value={details.description}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, description: e.target.value }))
      }
    />
  );
}
