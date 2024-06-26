"use client";

import { IoAdd } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CreateRoomBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("dashboard.pages.rooms");
  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isOpen && <Modal modalHandler={handleModal} />}
      <button
        className="min-w-[210px] bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-xl py-2 px-3 md:py-2 md:px-5 | w-full sm:w-fit flex justify-center items-center gap-1 font-bold hover:scale-105 transition-all duration-300"
        onClick={handleModal}
      >
        <IoAdd size={20} />
        <span className="text-nowrap">{t("createBtn")}</span>
      </button>
    </>
  );
}
