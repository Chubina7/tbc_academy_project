"use client";

import { IoAddCircle } from "react-icons/io5";
import Appear from "../../../../ui/framerMotionDivs/Appear";
import { useRef, useState } from "react";
import Modal from "./modal/Modal";

export default function CreateNew() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedData, setUploadedData] = useState({
    fileType: "" as BookTypes,
    fileName: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleBrowseFiles = () => {
    if (!fileInputRef) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFile = e.target.files[0];
    const fileName = selectedFile.name;
    const fileType = selectedFile.type as BookTypes;

    if (selectedFile) {
      setIsOpen(true);
      setUploadedData({ fileName, fileType });
    }
  };

  return (
    <>
      {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          uploadedFileName={uploadedData.fileName}
          uploadedFileType={uploadedData.fileType}
        />
      )}
      <Appear className="w-full h-full">
        <div
          className="h-full border-dashed border-2 bg-transparent border-[#FFFFFF] dark:border-[#352F44] rounded-xl overflow-hidden shadow-custom transition-all duration-300 | p-3 py-10 flex flex-col justify-center items-center gap-3 hover:scale-105 cursor-pointer"
          onClick={handleBrowseFiles}
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
