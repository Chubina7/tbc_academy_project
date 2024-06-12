import Item from "./item/Item";

interface Props {
  data: Array<IAnnouncementComment>;
}

export default function List({ data }: Props) {
  return (
    <div className="w-full max-w-4xl flex flex-col justify-center items-center ">
      {data.map((item) => (
        <Item key={item.comment_id} data={item} />
      ))}
    </div>
  );
}
