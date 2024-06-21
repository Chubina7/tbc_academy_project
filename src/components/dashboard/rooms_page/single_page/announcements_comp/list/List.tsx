import Announcement from "./item/Announcement";

interface Props {
  data: Array<IRoomAnnouncement>;
}

export default function List({ data }: Props) {
  return (
    <div className="w-full sm:h-[254px] sm:overflow-y-scroll scroll-hidden flex flex-col">
      {data.length > 0 ? (
        data.map((item) => (
          <Announcement key={item.announcement_id} data={item} />
        ))
      ) : (
        <p className="w-full text-center">No announcements made</p>
      )}
    </div>
  );
}
