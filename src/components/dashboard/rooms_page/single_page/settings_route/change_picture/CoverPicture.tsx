"use client";

import { useState } from "react";
import BrowseBtn from "./btns/BrowseBtn";
import Info from "./Info";
import ChangeBtn from "./btns/ChangeBtn";
import UploadedImg from "./UploadedImg";
import DeleteBtn from "./btns/DeleteBtn";

interface Props {
  data: string;
}

export default function CoverPicture({ data }: Props) {
  const [imageUrl, setImageUrl] = useState(data || "");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      setError("Unable to read non-image files");
      return;
    }

    const url = URL.createObjectURL(file);
    setImageUrl(url);

    // vercel blob upload
    // ...
    // const newBlob = await upload(file.name, file, {
    //   access: 'public',
    //   handleUploadUrl: '/api/avatar/upload',
    // });

    // setBlob(newBlob);
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
            Cover Picture
          </h1>
          <div className="flex justify-center items-center gap-2 font-bold text-sm">
            {imageUrl !== "" && (
              <DeleteBtn deleteHandler={() => setImageUrl("")} />
            )}
            {data === imageUrl && <BrowseBtn action={handleUpload} />}
            {imageUrl !== data && (
              <ChangeBtn source={imageUrl} setLoading={setIsLoading} />
            )}
          </div>
        </div>
        {imageUrl ? (
          <UploadedImg src={imageUrl} />
        ) : (
          <div className="w-full flex flex-col justify-center items-center border-2 border-dashed rounded-lg py-20 gap-4">
            <Info />
            {/* <BrowseBtn action={handleUpload} /> */}
          </div>
        )}
        <p className="text-sm text-red-600">{error.trim() !== "" && error}</p>
      </div>
    </div>
  );
}
