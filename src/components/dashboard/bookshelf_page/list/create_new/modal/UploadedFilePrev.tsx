import React from "react";
import FileIcon from "../../../../../ui/FileIcon";

interface Props {
  type: BookTypes;
  name: string;
}

export default function UploadedFilePrev({ name, type }: Props) {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <h1 className="w-full text-left text-base">File Preview</h1>
      <div className="w-full rounded-xl border-2 border-dashed bg-transparent flex flex-col justify-center items-center p-3 py-10 gap-2">
        <FileIcon fileType={type} />
        <p className="w-full text-center truncate select-none">{name}</p>
      </div>
    </div>
  );
}
