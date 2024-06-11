"use client";

import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../context/ctx";
import { settingUpNewRoomSteps } from "../../../../../../lib/lists/ListsWithComponents";

export default function Components() {
  const { steps } = useContext(ctx);

  return <>{settingUpNewRoomSteps[steps.activeIdx].component}</>;
}
