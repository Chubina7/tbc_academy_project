import Announcement from "./announcement/Announcement";
import PostDate from "./announcement/PostDate";
import Title from "./announcement/Title";
import AuthorDetails from "./author/AuthorDetails";

interface Props {
  author: {
    user_id: string;
    room_id: string;
    username: string;
    surname: string | null;
    room_title: string;
  };
  data: {
    announcement_title: string;
    announcement: string;
    announced_at: string;
    comments_number: number;
  };
}

export default function Details({ author, data }: Props) {
  const { room_id, room_title, surname, user_id, username } = author;

  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-3">
      <AuthorDetails
        author={{ surname, user_id, username }}
        room={{ room_id, room_title }}
      />
      <div className="w-full flex justify-between items-end gap-3">
        <Title data={data.announcement_title} />
        <PostDate data={data.announced_at} />
      </div>
      <Announcement data={data.announcement} />
    </div>
  );
}
