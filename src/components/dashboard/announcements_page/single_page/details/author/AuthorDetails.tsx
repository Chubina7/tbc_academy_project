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

export default function AuthorDetails({ author, room }: Props) {
  return (
    <div className="w-full flex gap-2 justify-start items-center opacity-60">
      <IoPersonOutline size={24} />
      <h1>
        <Link
          href={`/dashboard/profile/${author.user_id}`}
          className="hover:underline"
        >
          {author.username} {author.surname}
        </Link>{" "}
        -{" "}
        <Link
          href={`/dashboard/rooms/${room.room_id}`}
          className="hover:underline"
        >
          {room.room_title}
        </Link>
      </h1>
    </div>
  );
}
