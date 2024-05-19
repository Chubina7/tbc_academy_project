import Bookmarks from "../../../../../components/dashboard/Bookmarks/Bookmarks";
import { getBookmarks } from "../../../../../lib/helpers";

export default async function page() {
  const data = await getBookmarks();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Bookmarks data={data} />
    </div>
  );
}
