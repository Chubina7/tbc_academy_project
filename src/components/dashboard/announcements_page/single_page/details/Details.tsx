import { notFound } from "next/navigation";
import { getSingleAnnouncementData } from "../../../../../lib/data_fetchers";
import Announcement from "./announcement/Announcement";
import PostDate from "./announcement/PostDate";
import Title from "./announcement/Title";
import AuthorDetails from "./author/AuthorDetails";

interface Props {
  ann_id: string;
}

export default async function Details({ ann_id }: Props) {
  const data = await getSingleAnnouncementData(ann_id);

  if (!data) throw notFound();

  const { room_id, room_name, surname, user_id, username } = data.author;
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-3">
      <AuthorDetails
        author={{ surname, user_id, username }}
        room={{ room_id, room_name }}
        announcement_id={ann_id}
      />
      <div className="w-full flex justify-between items-end gap-3">
        <Title data={data.announcement_title} />
        <PostDate data={data.announced_at} />
      </div>
      <Announcement data={data.announcement} />
    </div>
  );
}
