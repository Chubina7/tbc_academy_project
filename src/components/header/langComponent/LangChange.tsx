"use client";

import { useState } from "react";
import LangChangeModal from "../../modals/LangChangeModal";
import { RiGlobalLine } from "react-icons/ri";

function LangChange() {
  const [active, setActive] = useState<boolean>(false);

  const handleModal = () => setActive((prev) => !prev);

  return (
    <div className="relative flex justify-center items-center gap-1">
      <div className="flex h-full justify-center items-center px-2">
        <RiGlobalLine
          size={22}
          className="cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100"
          color="inherit"
          onClick={handleModal}
        />
      </div>
      {active && <LangChangeModal langModalHandler={handleModal} />}
    </div>
  );
}

export default LangChange;
