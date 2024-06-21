import { useContext } from "react";
import { IoCaretDown } from "react-icons/io5";
import { UploadNewBookContext as ctx } from "../../../../../../../../context/ctx";

interface Props {
  handleOptions: () => void;
  isOpen: boolean;
}

export default function Select({ handleOptions, isOpen }: Props) {
  const { data, isLoading } = useContext(ctx);

  return (
    <div
      className={`w-full max-w-52 flex justify-center items-center gap-1 px-3 py-1 select-none ${
        isLoading ? "opacity-60 cursor-default" : "opacity-100 cursor-pointer "
      }`}
      onClick={() => {
        if (isLoading) return;
        handleOptions();
      }}
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
