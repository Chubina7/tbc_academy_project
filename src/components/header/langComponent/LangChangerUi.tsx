"use client";

import { useState } from "react";
import { RiGlobalLine } from "react-icons/ri";
import LangChangeModal from "../../modals/LangChangeModal";

interface Props {
  storedLang: string | undefined;
}

function LangChangerUi({ storedLang }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLang] = useState(() => storedLang || "ka");

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative flex justify-center items-center gap-2">
      <div
        className={`flex h-full justify-center items-center gap-1 cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100 ${
          isOpen ? "opacity-100" : ""
        }`}
        onClick={handleModal}
      >
        <RiGlobalLine size={22} />
      </div>
      {isOpen && (
        <LangChangeModal
          langModalHandler={handleModal}
          activeLang={activeLang}
        />
      )}
    </div>
  );
}

export default LangChangerUi;
