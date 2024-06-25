import { getAnnouncementComments } from "../../../../../lib/data_fetchers";
import List from "./List";
import Sorter from "./Sorter";
import { getTranslations } from "next-intl/server";

interface Props {
  ann_id: string;
  query: string | undefined;
}

export default async function Comments({ ann_id, query }: Props) {
  const data = await getAnnouncementComments(ann_id);
  const t = await getTranslations("dashboard.pages.announcements.singlePage");

  if (!data) return null;

  return (
    <>
      <div className="w-full max-w-4xl flex justify-between items-center">
        <h1 className="w-full max-w-4xl font-bold text-2xl">{t("allTitle")}</h1>
        <Sorter />
      </div>
      <List data={data} query={query} />
    </>
  );
}
