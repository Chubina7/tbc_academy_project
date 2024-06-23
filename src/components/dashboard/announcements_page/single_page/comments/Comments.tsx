import { getAnnouncementComments } from "../../../../../lib/data_fetchers";
import List from "./List";
import Sorter from "./Sorter";

interface Props {
  ann_id: string;
}

export default async function Comments({ ann_id }: Props) {
  const data = await getAnnouncementComments(ann_id);

  console.log("თავიდან წამეიღო დატაი");
  
  if (!data) return null;

  return (
    <>
      <div className="w-full max-w-4xl flex justify-between items-center">
        <h1 className="w-full max-w-4xl font-bold text-2xl">All Comments</h1>
        <Sorter />
      </div>
      <List data={data} />
    </>
  );
}
