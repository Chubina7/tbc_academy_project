import { IoCloudUpload } from "react-icons/io5";

export default function CoverPicture() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <h1 className="w-full font-bold text-2xl">Cover Picture</h1>
      <div className="w-full flex flex-col justify-center items-center border-2 border-dashed rounded-lg py-10">
        <IoCloudUpload size={32} />
        <h1 className="text-center font-semibold md:text-2xl">
          Upload new cover photo
        </h1>
        <p className="text-center text-xs md:text-sm opacity-60">
          Accepting png, jpg, svg, webp
        </p>
        <button className="mt-5 px-3 py-1 border rounded-lg">
          Browse Files
        </button>
      </div>
    </div>
  );
}
