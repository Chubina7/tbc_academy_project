"use client";

import { useContext } from "react";
import { AddNewRoomContext } from "../../../../../../context/ctx";
import { settingUpNewRoomSteps } from "../../../../../../lib/lists/ListsWithComponents";

export default function Components() {
  const { activeIdx } = useContext(AddNewRoomContext);

  return <>{settingUpNewRoomSteps[activeIdx].component}</>;
}
