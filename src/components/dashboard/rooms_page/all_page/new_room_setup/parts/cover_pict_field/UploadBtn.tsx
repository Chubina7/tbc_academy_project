import { useContext, useRef } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../../context/ctx";

export default function UploadBtn() {
  const { setters } = useContext(ctx);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type.split("/")[0] !== "image") {
      return;
    }

    const url = URL.createObjectURL(file);

    setters.setCoverPicture(url);
    return () => URL.revokeObjectURL(url);
  };

  return (
    <>
      <input
        type="file"
        name="cover_picture"
        id="cover_picture"
        hidden
        accept="image/*"
        ref={inputRef}
        onChange={handleUpload}
      />
      <button
        className="w-full text-lg px-3 py-1 rounded-xl bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3]"
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
      >
        Upload
      </button>
    </>
  );
}
