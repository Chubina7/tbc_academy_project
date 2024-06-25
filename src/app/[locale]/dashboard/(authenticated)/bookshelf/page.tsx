import BookshelfList from "../../../../../components/dashboard/bookshelf_page/list/BookshelfList";
import { getBookshelfItems } from "../../../../../lib/data_fetchers";

export const metadata: IMetaData = {
  title: "Bookshelf",
  description:
    "Find perfect books and resources, that you think you will need it.",
};

export default async function BookshelfPage() {
  const data = await getBookshelfItems();

  return (
    <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5 overflow-visible">
      <div>{/* filter */}</div>
      {data ? (
        <BookshelfList data={data} />
      ) : (
        <p>Error fetching bookshelf. Try again later.</p>
      )}
    </div>
  );
}
