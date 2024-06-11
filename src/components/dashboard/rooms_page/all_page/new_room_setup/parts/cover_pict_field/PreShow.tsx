import { IoImage } from "react-icons/io5";

export default function PreShow() {
  return (
    <div className="w-full h-full border-2 border-dashed rounded-lg flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-2 opacity-60">
        <IoImage size={36} />
        <h1>No picture selected</h1>
      </div>
    </div>
  );
}
