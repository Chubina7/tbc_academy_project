import Member from "./item/Member";

interface Props {
  data: Array<IRoomMember> | null;
  room_id: string;
}

export default function List({ data, room_id }: Props) {
  return (
    <div className="w-full xl:h-[658px] xl:overflow-scroll scroll-hidden flex justify-start items-start flex-col">
      {data ? (
        data.length > 0 ? (
          data.map((item) => (
            <Member key={item.user_id} data={item} room_id={room_id} />
          ))
        ) : (
          <p className="w-full text-center">No members found</p>
        )
      ) : (
        <p className="w-full text-center">Erorr fetching data</p>
      )}
    </div>
  );
}
