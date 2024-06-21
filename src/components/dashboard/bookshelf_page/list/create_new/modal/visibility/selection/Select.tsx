import { useContext } from "react";
import { IoCaretDown } from "react-icons/io5";
import { UploadNewBookContext as ctx } from "../../../../../../../../context/ctx";

interface Props {
  closeOptions: () => void;
  isOpen: boolean;
}

export default function Select({ closeOptions, isOpen }: Props) {
  const { data } = useContext(ctx);

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
        {data.room?.room_name ? data.room.room_name : "Select Room"}
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
