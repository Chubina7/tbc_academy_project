"use client";

import { useTranslations } from "next-intl";
import CloseBtn from "./CloseBtn";

interface Props {
  handler: () => void;
}

export default function Heading({ handler }: Props) {
  const t = useTranslations("dashboard.pages.bookshelf.modal");

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="font-semibold text-xl select-none">{t("title")}</h1>
      <CloseBtn closeModal={handler} />
    </div>
  );
}
