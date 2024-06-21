"use client";

import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../context/ctx";
import { settingUpNewRoomSteps } from "../../../../../../lib/lists/ListsWithComponents";

export default function Components() {
  const { steps, isLoading } = useContext(ctx);

  return (
    <div
      className={`w-full max-w-4xl h-full ${
        isLoading ? "opacity-30" : "opacity-100"
      }`}
    >
      {settingUpNewRoomSteps[steps.activeIdx].component}
    </div>
  );
}
