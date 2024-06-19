"use client";

import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../context/ctx";

export default function Heading() {
  const { isLoading } = useContext(ctx);
  return (
    <h1
      className={`w-full mb-4 text-3xl text-center ${
        isLoading ? "opacity-30" : "opacity-100"
      }`}
    >
      Setup new room
    </h1>
  );
}
