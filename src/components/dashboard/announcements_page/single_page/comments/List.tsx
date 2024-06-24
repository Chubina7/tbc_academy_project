import Item from "./item/Item";

interface Props {
  data: Array<IAnnouncementComment> | undefined;
  query: string | undefined;
}

export default function List({ data, query }: Props) {
  return (
    <div className="w-full max-w-4xl flex flex-col justify-center items-center ">
      {data ? (
        data.length > 0 ? (
          data
            .sort((a, b) => {
              if (query) {
                return (
                  new Date(a.commented_at).getTime() -
                  new Date(b.commented_at).getTime()
                );
              } else {
                return 0;
              }
            })
            .map((item) => <Item key={item.comment_id} data={item} />)
        ) : (
          <p className="w-full text-center">No comments</p>
        )
      ) : (
        <p className="w-full text-center">Error fetching data</p>
      )}
    </div>
  );
}
