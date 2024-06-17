import Item from "./item/Item";

interface Props {
  data: Array<IAnnouncementComment> | undefined;
}

export default function List({ data }: Props) {
  return (
    <div className="w-full max-w-4xl flex flex-col justify-center items-center ">
      {data ? (
        data.length > 0 ? (
          data.map((item) => <Item key={item.comment_id} data={item} />)
        ) : (
          <p className="w-full text-center">No comments</p>
        )
      ) : (
        <p className="w-full text-center">Error fetching data</p>
      )}
    </div>
  );
}
