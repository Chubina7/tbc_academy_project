import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("Contact.contactInfo");

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 py-8 px-5 bg-slate-500 md:max-w-screen-sm md:mt-20">
      <h1 className="font-bold text-3xl">{t("title")}</h1>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <GrLocation size={20} />
          <strong>{t("info.address.name")}:</strong>
        </div>
        <p>{t("info.address.value")}</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <IoCallOutline size={20} />
          <strong>{t("info.phone.name")}:</strong>
        </div>
        <p>{t("info.phone.value")}</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <MdOutlineEmail size={20} />
          <strong>{t("info.email.name")}:</strong>
        </div>
        <p>{t("info.email.value")}</p>
      </div>
      <div className="flex justify-center items-start gap-2 flex-col md:flex-row">
        <div className="flex gap-2">
          <IoIosGlobe size={20} />
          <strong>{t("info.website.name")}:</strong>
        </div>
        <p>{t("info.website.value")}</p>
      </div>
    </div>
  );
}
