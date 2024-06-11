import { IoAddCircleOutline } from "react-icons/io5";
interface Props {
  onClickAct: () => void;
}
export default function AddBtn({ onClickAct }: Props) {
  return (
    <div
      className="flex justify-center items-center gap-1  cursor-pointer rounded-full hover:underline transition-all duration-300 select-none"
      onClick={onClickAct}
    >
      <p className="hidden sm:block">Add</p>
      <IoAddCircleOutline size={20} />
    </div>
  );
}
