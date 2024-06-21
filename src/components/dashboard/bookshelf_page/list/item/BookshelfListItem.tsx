import Link from "next/link";
import Author from "./Author";
import Title from "./Title";
import Desc from "./Desc";
import VariantsListItem from "../../../../ui/framerMotionDivs/variants/VariantsListItem";
import BookmarkCheck from "./BookmarkCheck";
import FileIcon from "../../../../ui/FileIcon";

interface Props {
  data: {
    book_id: string;
    book_title: string;
    book_description: string;
    book_type: BookTypes;
    author: {
      room: { room_id: string; room_name: string } | null;
      user: { surname: string | null; user_id: string; username: string };
    };
  };
}

export default function BookshelfListItem({ data }: Props) {
  return (
    <VariantsListItem className="w-full select-none">
      <div className="relative h-full bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl shadow-custom transition-all duration-300 | p-3 pt-10 flex flex-col justify-center items-center gap-3 hover:scale-105">
        <BookmarkCheck />
        <Link
          href={`/dashboard/bookshelf/${data.book_id}`}
          className="w-full flex flex-col gap-3 justify-center items-center"
        >
          <FileIcon fileType={data.book_type} />
          <Title text={data.book_title} />
        </Link>
        <Desc text={data.book_description} />
        <Author room={data.author.room} user={data.author.user} />
      </div>
    </VariantsListItem>
  );
}
