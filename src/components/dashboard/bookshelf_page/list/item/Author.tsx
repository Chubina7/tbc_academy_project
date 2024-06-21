import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";

interface Props {
  user: {
    username: string;
    surname: string | null;
    user_id: string;
  };
  room: {
    room_id: string;
    room_name: string;
  } | null;
}

export default function Author({ room, user }: Props) {
  return (
    <div className="w-full flex flex-grow flex-col gap-2 justify-end items-start opacity-60 text-sm mt-3">
      <div className="flex gap-1 justify-center items-center">
        <IoPersonOutline size={18} />
        <Link
          href={`/dashboard/profile/${user.user_id}`}
          className="w-full hover:underline cursor-pointer line-clamp-1"
        >
          {user.username} {user.surname}
        </Link>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <IoGlobeOutline size={18} />
        {room ? (
          <Link
            href={`/dashboard/rooms/${room.room_id}`}
            className="w-full hover:underline cursor-pointer line-clamp-1"
          >
            {room.room_name}
          </Link>
        ) : (
          <p>Public</p>
        )}
      </div>
    </div>
  );
}
