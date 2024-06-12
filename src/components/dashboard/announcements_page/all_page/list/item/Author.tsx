import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";

interface Props {
  author: {
    user_id: string;
    username: string;
    surname: string | null;
  };
  room: {
    room_id: string;
    room_title: string;
  };
}

export default function Author({ author, room }: Props) {
  return (
    <div className="text-xs sm:text-sm opacity-60 flex justify-center items-center gap-1">
      <IoPersonOutline size={20} className="min-w-5" />
      <p>
        <Link
          href={`/dashboard/users/${author.user_id}`}
          className="cursor-pointer hover:underline"
        >
          {author.username} {author.surname}
        </Link>{" "}
        -{" "}
        <Link
          href={`/dashboard/rooms/${room.room_id}`}
          className="cursor-pointer hover:underline"
        >
          {room.room_title}
        </Link>
      </p>
    </div>
  );
}
