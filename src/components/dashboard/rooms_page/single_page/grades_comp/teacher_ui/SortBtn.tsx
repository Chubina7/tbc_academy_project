import { IoFilter } from "react-icons/io5";

export default function SortBtn() {
  return (
    <div className="flex justify-center items-center gap-1 cursor-pointer select-none hover:underline">
      <p>Recent</p>
      <IoFilter size={20} />
    </div>
  );
}
