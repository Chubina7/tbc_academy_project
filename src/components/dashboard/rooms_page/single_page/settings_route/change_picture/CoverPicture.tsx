"use client";

import { useState } from "react";
import BrowseBtn from "./btns/BrowseBtn";
import ChangeBtn from "./btns/ChangeBtn";
import UploadedImg from "./UploadedImg";
import DeleteBtn from "./btns/DeleteBtn";
import { useTranslations } from "next-intl";

interface Props {
  data: string;
}

export default function CoverPicture({ data }: Props) {
  const [imageFile, setImageFile] = useState(null as File | null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.pict"
  );

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      setError("Unable to read non-image files");
      return;
    }

    setImageFile(file);
  };

  return (
    <div
      className={`relative w-full lg:max-w-[70%] ${
        isLoading ? "animate-pulse" : "animate-none"
      }`}
    >
      {isLoading && (
        <div className="absolute z-50 top-0 left-0 w-full h-full" />
      )}
      <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <h1 className="w-full font-bold text-2xl select-none">
            {t("title")}
          </h1>
          <div className="flex justify-center items-center gap-2 font-bold text-sm">
            {imageFile ? (
              <>
                <DeleteBtn deleteHandler={() => setImageFile(null)} />
                <ChangeBtn
                  source={imageFile}
                  setLoading={setIsLoading}
                  previousImg={data}
                  resetButtons={setImageFile}
                />
              </>
            ) : (
              <BrowseBtn action={handleUpload} />
            )}
          </div>
        </div>
        <UploadedImg src={imageFile ? imageFile : data} />
        <p className="text-sm text-red-600">{error.trim() !== "" && error}</p>
      </div>
    </div>
  );
}
