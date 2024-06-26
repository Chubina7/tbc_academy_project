import Title from "./Title";
import Comments from "./Comments";
import Author from "./Author";
import Announcement from "./Announcement";
import VariantsListItem from "../../../../../ui/framerMotionDivs/variants/VariantsListItem";
import DeleteBtn from "./delete/DeleteBtn";
import { USER } from "../../../../../../lib/helpers/server_act_funcs/authorization_acts";
import dynamic from "next/dynamic";
const PostDate = dynamic(() => import("./PostDate"), { ssr: false });

interface Props {
  author: {
    user_id: string;
    room_id: string;
    username: string;
    surname: string | null;
    room_name: string;
  };
  data: {
    announcement_id: string;
    announcement_title: string;
    announcement: string;
    announced_at: string;
    comments_number: number;
  };
}

export default async function Item({ data, author }: Props) {
  const loginedUser = await USER();
  const { room_id, room_name, surname, user_id, username } = author;

  return (
    <VariantsListItem className="w-full max-w-4xl">
      <div className="relative bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl px-3 sm:px-4 py-6 transition-all duration-300 | w-full max-w-4xl flex flex-col justify-center items-start gap-3">
        <div className="w-full flex justify-between items-start gap-4">
          <Title
            announcement_id={data.announcement_id}
            data={data.announcement_title}
          />
          <Comments data={data.comments_number} />
        </div>
        <div className="w-full flex justify-between items-center gap-4 text-xs sm:text-sm">
          <Author
            author={{ surname, user_id, username }}
            room={{ room_id, room_name }}
          />
          <PostDate data={data.announced_at} />
        </div>
        <Announcement data={data.announcement} />
        {loginedUser.user_id === author.user_id && (
          <DeleteBtn announcement_id={data.announcement_id} redirect={false} />
        )}
      </div>
    </VariantsListItem>
  );
}
