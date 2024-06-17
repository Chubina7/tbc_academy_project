import VariantsList from "../../../../ui/framerMotionDivs/variants/VariantsList";
import Item from "./item/Item";

interface Props {
  data: Array<IAnnouncement> | undefined;
}

export default function List({ data }: Props) {
  return (
    <VariantsList className="w-full flex flex-col gap-5 justify-center items-center">
      {data ? (
        data.length > 0 ? (
          data.map((item) => (
            <Item
              key={item.announcement_id}
              author={item.author}
              data={{
                announced_at: item.announced_at,
                announcement: item.announcement,
                announcement_id: item.announcement_id,
                announcement_title: item.announcement_title,
                comments_number: item.comments_number,
              }}
            />
          ))
        ) : (
          <p className="w-full text-center">No announcements made</p>
        )
      ) : (
        <p className="w-full text-center">Error fetching data</p>
      )}
    </VariantsList>
  );
}
