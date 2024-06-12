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
      <div className="w-full max-w-4xl flex flex-col items-end gap-3">
        <h1 className="w-full max-w-4xl font-bold text-2xl">Add new comment</h1>
        <textarea
          name="announcement_new_comment"
          id="announcement_new_comment"
          placeholder="What is in your mind..."
          rows={5}
          className="w-full bg-transparent border-2 rounded-lg focus:outline-none p-3 resize-none"
        />
        <button className="px-3 py-1 rounded-lg bg-red-400">Add Comment</button>
      </div>
      <Comments />
    </div>
  );
}
