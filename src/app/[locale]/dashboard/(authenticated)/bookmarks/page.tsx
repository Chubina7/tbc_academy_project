import { getBookmarks } from "../../../../../lib/data_fetchers";

export default async function BookmarksPage() {
  const data = await getBookmarks();
  console.log(data);
  return <div>page</div>;
}
