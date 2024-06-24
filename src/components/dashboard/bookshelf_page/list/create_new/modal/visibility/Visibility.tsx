"use client";

import { useContext, useEffect, useState } from "react";
import Toggle from "./Toggle";
import SelectRoom from "./selection/SelectRoom";
import { UploadNewBookContext as ctx } from "../../../../../../../context/ctx";

export default function Visibility() {
  const { setData } = useContext(ctx);
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    setIsPublic(true);
    setData((prev) => ({ ...prev, room: null }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-start gap-5">
      <Toggle state={[isPublic, setIsPublic]} />
      {!isPublic && <SelectRoom />}
    </div>
  );
}
