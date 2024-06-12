import AuthorImg from "./AuthorImg";
import AuthorNames from "./AuthorNames";
import Comment from "./Comment";
import PostTime from "./PostTime";
import Likes from "./Likes";

export default function Item() {
  return (
    <div className="w-full flex gap-3 rounded-lg px-3 sm:px-4 py-3 sm:py-6 hover:bg-[#FFFFFF] hover:dark:bg-[#352F44] hover:shadow-custom transition-all duration-300">
      <AuthorImg />
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <AuthorNames />
        <Comment />
      </div>
      <div className="flex flex-col justify-end">
        <Likes />
        <PostTime />
      </div>
    </div>
  );
}
