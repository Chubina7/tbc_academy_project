"use client";

import { useState } from "react";
import AddNewAnnouncement from "./new_announcement/AddNewAnnouncement";
import { IoAdd } from "react-icons/io5";
import { useTranslations } from "next-intl";

interface Props {
  enrolledRoomList: Array<{ room_id: string; room_name: string }>;
}

export default function TeacherComp({ enrolledRoomList }: Props) {
  const [makeAnnc, setMakeAnnc] = useState(false);
  const t = useTranslations("dashboard.pages.announcements.new");

  const handleAnnouncement = () => setMakeAnnc((prev) => !prev);

  return (
    <>
      {makeAnnc ? (
        <>
          <h1 className="w-full max-w-4xl font-bold text-2xl">{t("make")}</h1>
          <AddNewAnnouncement
            enrolledRoomList={enrolledRoomList}
            cancelAddition={handleAnnouncement}
          />
        </>
      ) : (
        <div className="w-full max-w-4xl flex justify-end">
          <button
            className="bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-xl py-2 px-3 md:py-2 md:px-5 | w-full sm:w-fit flex justify-center items-center gap-1 font-bold hover:scale-105 transition-all duration-300"
            onClick={handleAnnouncement}
          >
            <IoAdd size={20} />
            <span className="text-nowrap">{t("add")}</span>
          </button>
        </div>
      )}
      <h1 className="w-full max-w-4xl font-bold text-2xl">{t("allTitle")}</h1>
    </>
  );
}
