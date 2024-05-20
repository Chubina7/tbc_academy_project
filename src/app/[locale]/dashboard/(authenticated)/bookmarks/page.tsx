import { cookies } from "next/headers";
import Bookmarks from "../../../../../components/dashboard/bookmarksPage/Bookmarks";
import DeleteBookmarks from "../../../../../components/dashboard/resourcesPage/resourceItem/actions/DeleteBookmarks";
import { getBookmarks } from "../../../../../lib/helpers";

export default async function page() {
  const user_id = cookies().get("user_id")?.value || "";
  const data = await getBookmarks(user_id);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <DeleteBookmarks />
      <Bookmarks data={data} />
    </div>
  );
}
