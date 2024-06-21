import { useState } from "react";
import Toggle from "./Toggle";
import SelectRoom from "./selection/SelectRoom";

export default function Visibility() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="h-full flex flex-col justify-center items-start gap-5">
      <Toggle state={[isPublic, setIsPublic]} />
      {!isPublic && <SelectRoom />}
    </div>
  );
}
