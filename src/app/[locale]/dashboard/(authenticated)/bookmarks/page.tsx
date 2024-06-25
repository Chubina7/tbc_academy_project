import BookmarkList from "../../../../../components/dashboard/bookmarks_page/BookmarkList";
import { getBookshelfItems } from "../../../../../lib/data_fetchers";

export default async function BookmarksPage() {
  const bookshelfData = await getBookshelfItems();

  if (!bookshelfData) return <p>can not fetch bookshelf data</p>;

  return (
    <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5 overflow-visible">
      <br />
      <BookmarkList data={bookshelfData} />
    </div>
  );
}
