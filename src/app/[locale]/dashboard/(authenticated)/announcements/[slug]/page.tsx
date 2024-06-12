import Comments from "../../../../../../components/dashboard/announcements_page/single_page/comments/Comments";
import Details from "../../../../../../components/dashboard/announcements_page/single_page/details/Details";

interface Props {
  params: IParams;
}

export default function AnnouncementPage({ params }: Props) {
  const { slug } = params;
  console.log("log from single announcement ", slug);

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-3 md:px-7 py-3 gap-5">
      <Details />
      <hr className="w-full max-w-4xl border-2 rounded-full mt-12" />
      <Comments />
    </div>
  );
}
