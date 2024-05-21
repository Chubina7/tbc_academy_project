import { cookies } from "next/headers";
import Bookmarks from "../../../../../components/dashboard/bookmarks_page/Bookmarks";
import DeleteBookmarks from "../../../../../components/dashboard/el_resources_page/el_resource_item/actions/DeleteBookmarks";
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
