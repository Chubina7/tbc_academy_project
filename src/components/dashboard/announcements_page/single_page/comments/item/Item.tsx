import AuthorImg from "./AuthorImg";
import AuthorNames from "./AuthorNames";
import Comment from "./Comment";
import PostTime from "./PostTime";
import Likes from "./Likes";

interface Props {
  data: IAnnouncementComment;
}

export default function Item({ data }: Props) {
  const { author, comment, likes, commented_at, comment_id } = data;

  return (
    <div className="w-full flex gap-3 rounded-lg px-3 sm:px-4 py-3 sm:py-6 hover:bg-[#FFFFFF] hover:dark:bg-[#352F44] hover:shadow-custom transition-all duration-300">
      <AuthorImg alt={author.username} src={author.user_img} />
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <AuthorNames
          author={{
            role: author.role,
            surname: author.surname,
            user_id: author.user_id,
            username: author.username,
          }}
        />
        <Comment data={comment} />
      </div>
      <div className="flex flex-col justify-end">
        <Likes
          isLiked={likes.isLiked}
          num={likes.quantity}
          comment_id={comment_id}
        />
        <PostTime commented_at={commented_at} />
      </div>
    </div>
  );
}
