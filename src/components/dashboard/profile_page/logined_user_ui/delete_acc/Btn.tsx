"use client";

import { useState } from "react";
import Modal from "./modal/Modal";
import { useTranslations } from "next-intl";

export default function Btn() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("dashboard.pages.profile.logined.deleteAcc");

  const handleModal = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative z-50">
      <button
        className="bg-red-600 text-[#FFFFFF] rounded-lg px-3 py-1 mt-14"
        onClick={handleModal}
      >
        {t("btn")}
      </button>
      {isOpen && <Modal modalCloser={handleModal} />}
    </div>
  );
}
