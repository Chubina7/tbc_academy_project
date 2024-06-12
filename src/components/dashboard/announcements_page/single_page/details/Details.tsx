import Announcement from "./announcement/Announcement";
import PostDate from "./announcement/PostDate";
import Title from "./announcement/Title";
import AuthorDetails from "./author/AuthorDetails";

export default function Details() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-3">
      <AuthorDetails />
      <div className="w-full flex justify-between items-end gap-3">
        <Title />
        <PostDate />
      </div>
      <Announcement />
    </div>
  );
}
