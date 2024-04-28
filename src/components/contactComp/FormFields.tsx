import { useTranslations } from "next-intl";
import React from "react";

export default function FormFields() {
  const t = useTranslations("Contact.form");

  return (
    <form className="w-full flex flex-col p-3 gap-6">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col items-start justify-center ">
          <label htmlFor="name">{t("labels.name")} *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={t("inputs.namePh")}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <label htmlFor="email">{t("labels.email")} *</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={t("inputs.emailPh")}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div>
          <label htmlFor="subject">{t("labels.subject")}</label>
          <input
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={t("inputs.subjectPh")}
            type="text"
            id="subject"
            name="subject"
          />
        </div>
        <div>
          <label htmlFor="question">{t("labels.questionOrMessage")} *</label>
          <textarea
            className="w-full border-2 border-black px-4 py-3 focus:outline-none"
            placeholder={t("inputs.questionOrMessagePh")}
            id="question"
            name="question"
            required
          />
          <i>* - {t("required")}</i>
        </div>
      </div>
    </form>
  );
}
