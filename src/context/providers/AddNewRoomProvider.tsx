"use client";

import { ReactNode, useState } from "react";
import { AddNewRoomContext } from "../ctx";

interface Props {
  children: ReactNode;
}

export default function AddNewRoomProvider({ children }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <AddNewRoomContext.Provider value={{ activeIdx, setActiveIdx }}>
      {children}
    </AddNewRoomContext.Provider>
  );
}
