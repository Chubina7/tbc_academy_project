import { unstable_setRequestLocale } from "next-intl/server";
import AddNewComment from "../../../../../../components/dashboard/announcements_page/single_page/add_new_comment/AddNewComment";
import Comments from "../../../../../../components/dashboard/announcements_page/single_page/comments/Comments";
import Details from "../../../../../../components/dashboard/announcements_page/single_page/details/Details";

interface Props {
  params: IParams;
}

export default async function AnnouncementPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-3 md:px-7 py-3 gap-5">
      <Details ann_id={params.slug} />
      <hr className="w-full max-w-4xl border-2 rounded-full mt-12" />
      <AddNewComment />
      <Comments ann_id={params.slug} />
    </div>
  );
}
