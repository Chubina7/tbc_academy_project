import { IoCloudUpload } from "react-icons/io5";

export default function Info() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <IoCloudUpload size={32} />
      <h1 className="text-center font-semibold md:text-2xl select-none">
        Upload new cover photo
      </h1>
      <p className="text-center text-xs md:text-sm opacity-60 select-none">
        Accepting image/*
      </p>
    </div>
  );
}
