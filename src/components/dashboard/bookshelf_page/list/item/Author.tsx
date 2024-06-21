import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";

interface Props {
  user: {
    username: string;
    surname: string | null;
    user_id: string;
  };
  room: {
    room_id: string;
    room_name: string;
  };
}

export default function Author({ room, user }: Props) {
  return (
    <div className="flex gap-2 justify-center items-start opacity-60 text-sm mt-3">
      <IoPersonOutline size={18} />
      <p>
        <Link
          href={`/dashboard/profile/${user.user_id}`}
          className="hover:underline cursor-pointer"
        >
          {user.username} {user.surname}
        </Link>{" "}
        -{" "}
        <Link
          href={`/dashboard/rooms/${room.room_id}`}
          className="hover:underline cursor-pointer"
        >
          {room.room_name}
        </Link>
      </p>
    </div>
  );
}
