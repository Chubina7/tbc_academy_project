import Bookmarks from "../../../../../components/dashboard/bookmarksPage/Bookmarks";
import DeleteBookmarks from "../../../../../components/dashboard/resourcesPage/resourceItem/actions/DeleteBookmarks";
import { getBookmarks } from "../../../../../lib/helpers";

export default async function page() {
  const data = await getBookmarks();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <DeleteBookmarks />
      <Bookmarks data={data} />
    </div>
  );
}
