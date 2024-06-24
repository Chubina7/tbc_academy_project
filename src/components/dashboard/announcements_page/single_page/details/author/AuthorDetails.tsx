import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import DeleteBtn from "../../../all_page/list/item/delete/DeleteBtn";
import { USER } from "../../../../../../lib/helpers/server_act_funcs/authorization_acts";

interface Props {
  author: {
    user_id: string;
    username: string;
    surname: string | null;
  };
  room: {
    room_id: string;
    room_name: string;
  };
  announcement_id: string;
}

export default async function AuthorDetails({
  author,
  room,
  announcement_id,
}: Props) {
  const { user_id } = await USER();
  
  return (
    <div className="w-full flex gap-2 justify-start items-center">
      <IoPersonOutline size={24} />
      <div className="w-full flex justify-between items-center">
        <h1 className="opacity-60">
          <Link
            href={`/dashboard/profile/${author.user_id}`}
            className="hover:underline"
          >
            {author.username} {author.surname}
          </Link>{" "}
          &#x2022;{" "}
          <Link
            href={`/dashboard/rooms/${room.room_id}`}
            className="hover:underline"
          >
            {room.room_name}
          </Link>
        </h1>
        {user_id === author.user_id && (
          <DeleteBtn announcement_id={announcement_id} redirect />
        )}
      </div>
    </div>
  );
}
