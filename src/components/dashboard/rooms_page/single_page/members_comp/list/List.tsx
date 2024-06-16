import Member from "./item/Member";

interface Props {
  data: Array<IRoomMember>;
  room_id: string;
}

export default function List({ data, room_id }: Props) {
  return (
    <div className="w-full 2xl:h-[658px] overflow-scroll scroll-hidden flex justify-start items-start flex-col">
      {data.map((item) => (
        <Member key={item.user_id} data={item} room_id={room_id} />
      ))}
    </div>
  );
}
