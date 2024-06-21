import { IoCaretDown } from "react-icons/io5";

interface Props {
  closeOptions: () => void;
  isOpen: boolean;
  selected: string | undefined;
}

export default function Select({ closeOptions, isOpen, selected }: Props) {
  return (
    <div
      className="w-full max-w-52 flex justify-center items-center gap-1 cursor-pointer px-3 py-1 select-none"
      onClick={closeOptions}
      id="room_selecting_in_new_book"
    >
      <p
        className="w-full h-full text-left line-clamp-1"
        id="room_selecting_in_new_book"
      >
        {selected ? selected : "Select Room"}
      </p>
      <IoCaretDown
        size={18}
        className={`transition-all duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        id="room_selecting_in_new_book"
      />
    </div>
  );
}
