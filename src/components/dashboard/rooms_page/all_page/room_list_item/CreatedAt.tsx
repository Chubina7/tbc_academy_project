import { IoCalendarClearOutline } from "react-icons/io5";

interface Props {
  created_at: string;
}

export default function CreatedAt({ created_at }: Props) {
  return (
    <div className="w-fit flex gap-1 justify-center items-center">
      <p>{created_at}</p>
      <IoCalendarClearOutline size={18} />
    </div>
  );
}
