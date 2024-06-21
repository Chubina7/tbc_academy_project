"use client";

import { IoAddCircle } from "react-icons/io5";
import Appear from "../../../../ui/framerMotionDivs/Appear";
import { useContext, useRef } from "react";
import { UploadNewBookContext as ctx } from "../../../../../context/ctx";

interface Props {
  openModal: () => void;
}

export default function InputTypeFile({ openModal }: Props) {
  const { setData } = useContext(ctx);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const { name, type } = e.target.files[0] as {
      name: string;
      type: BookTypes;
    };

    openModal();
    setData((prev) => ({ ...prev, book: { name, type } }));
  };

  return (
    <>
      <Appear className="w-full h-full">
        <div
          className="h-full border-dashed border-4 bg-transparent border-[#FFFFFF] dark:border-[#352F44] rounded-xl overflow-hidden shadow-custom transition-all duration-300 | p-3 py-10 flex flex-col justify-center items-center gap-3 hover:scale-105 cursor-pointer"
          onClick={() => {
            if (!fileInputRef) return;
            fileInputRef.current?.click();
          }}
        >
          <IoAddCircle size={44} />
          <h1>Upload</h1>
        </div>
      </Appear>
      <input
        hidden
        type="file"
        name="new_book"
        id="new_book"
        ref={fileInputRef}
        accept="image/*, .pdf, .txt, .doc, .docx, .ppt, .pptx"
        onChange={handleFileChange}
      />
    </>
  );
}
