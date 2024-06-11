import { IoCloudUpload } from "react-icons/io5";

export default function Info() {
  return (
    <>
      <IoCloudUpload size={32} />
      <h1 className="text-center font-semibold md:text-2xl select-none">
        Upload new cover photo
      </h1>
      <p className="text-center text-xs md:text-sm opacity-60 select-none">
        Accepting png, jpg, svg, webp
      </p>
    </>
  );
}
