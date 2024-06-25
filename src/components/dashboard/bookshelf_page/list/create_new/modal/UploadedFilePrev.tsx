"use client";

import { useContext } from "react";
import FileIcon from "../../../../../ui/FileIcon";
import { UploadNewBookContext as ctx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

export default function UploadedFilePrev() {
  const { data, isLoading } = useContext(ctx);
  const t = useTranslations("dashboard.pages.bookshelf.modal");

  return (
    <div
      className={`w-full flex flex-col gap-2 justify-center items-center ${
        isLoading ? "opacity-60" : "opacity-100"
      }`}
    >
      <h1 className="w-full text-left text-base select-none">
        {t("filePrev")}
      </h1>
      <div className="w-full rounded-xl border-2 border-dashed bg-transparent flex flex-col justify-center items-center p-3 py-10 gap-2">
        <FileIcon fileType={data.file.type as BookTypes} />
        <p className="w-full text-center truncate select-none">
          {data.file.name}
        </p>
      </div>
    </div>
  );
}
