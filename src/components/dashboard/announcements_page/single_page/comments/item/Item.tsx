import AuthorImg from "./AuthorImg";
import AuthorNames from "./AuthorNames";
import Comment from "./Comment";
import dynamic from "next/dynamic";
const PostTime = dynamic(() => import("./PostTime"), {
  ssr: false,
  loading: () => (
    <p className="sm:w-28 text-nowrap text-sm text-center">Loading...</p>
  ),
});
import Likes from "./Likes";

interface Props {
  data: IAnnouncementComment;
}

export default function Item({ data }: Props) {
  const { author, comment, likes, commented_at, comment_id } = data;

  return (
    <div
      key={comment_id}
      className="group w-full flex gap-3 rounded-lg px-3 sm:px-4 py-3 sm:py-6 hover:bg-[#FFFFFF] hover:dark:bg-[#352F44] hover:shadow-custom transition-all duration-300"
    >
      <AuthorImg alt={author.username} src={author.profile_picture} />
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <AuthorNames
          author={{
            role: author.role,
            surname: author.surname,
            user_id: author.user_id,
            username: author.username,
          }}
          idToDelte={comment_id}
        />
        <Comment data={comment} />
      </div>
      <div className="flex flex-col justify-end">
        <Likes
          isLiked={likes.isLiked}
          num={likes.quantity}
          comment_id={comment_id}
        />
        <PostTime key={comment_id} commented_at={commented_at} />
      </div>
    </div>
  );
}
