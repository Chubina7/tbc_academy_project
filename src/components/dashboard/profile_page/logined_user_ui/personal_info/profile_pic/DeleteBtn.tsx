import { IoTrash } from "react-icons/io5";

export default function DeleteBtn() {
  return (
    <button className="flex gap-2 justify-center items-center text-red-600">
      <IoTrash size={20} />
      <p>Delete exciting</p>
    </button>
  );
}
