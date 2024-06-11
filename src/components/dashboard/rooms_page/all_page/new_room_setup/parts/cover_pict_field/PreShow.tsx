import Image from "next/image";
import { useContext } from "react";
import { AddNewRoomContext as ctx } from "../../../../../../../context/ctx";
import { IoImage } from "react-icons/io5";

export default function PreShow() {
  const { data } = useContext(ctx);

  return (
    <div className="w-full h-full max-h-[460px] border-2 border-dashed rounded-lg flex justify-center items-center">
      {data.coverPicture ? (
        <Image
          src={data.coverPicture}
          alt={data.title}
          width={720}
          height={440}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-2 opacity-60">
          <IoImage size={36} />
          <h1>No picture selected</h1>
        </div>
      )}
    </div>
  );
}
