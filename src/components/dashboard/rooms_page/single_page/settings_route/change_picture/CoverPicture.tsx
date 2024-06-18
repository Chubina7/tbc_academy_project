"use client";

import { useState } from "react";
import BrowseBtn from "./BrowseBtn";
import Info from "./Info";
import ChangeBtn from "./ChangeBtn";
import UploadedImg from "./UploadedImg";

interface Props {
  data: string | null;
}

export default function CoverPicture({ data }: Props) {
  const [imageUrl, setImageUrl] = useState(data || "");
  const [error, setError] = useState("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      setError("Unable to read non-image files");
      return;
    }

    const url = URL.createObjectURL(file);

    setImageUrl(url);
    if (error.trim() !== "") setError("");
    return () => URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <h1 className="w-full font-bold text-2xl select-none">Cover Picture</h1>
        {imageUrl.trim() !== "" && <ChangeBtn source={imageUrl} />}
      </div>
      {imageUrl ? (
        <UploadedImg src={imageUrl} />
      ) : (
        <div className="w-full flex flex-col justify-center items-center border-2 border-dashed rounded-lg py-20">
          <Info />
          <BrowseBtn action={handleUpload} />
        </div>
      )}
      <p className="text-sm text-red-600">{error.trim() !== "" && error}</p>
    </div>
  );
}
