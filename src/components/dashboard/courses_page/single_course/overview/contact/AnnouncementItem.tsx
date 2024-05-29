import Image from "next/image";
import backup_img from "/public/anonym_user.webp";
import VariantsListItem from "../../../../../ui/framerMotionDivs/variants/VariantsListItem";
import Time from "./Time";

interface Props {
  data: AnnouncementComponentType;
}

export default function AnnouncementItem({ data }: Props) {
  const { author_name, author_surname, body, created_at, user_image } = data;

  return (
    <VariantsListItem className="w-full flex justify-start items-center gap-3 p-3 px-5 hover:bg-[#5C5470]">
      <Image
        src={user_image ? user_image : backup_img}
        alt={""}
        width={64}
        height={64}
        className="rounded-xl w-12 h-12 object-cover cursor-pointer"
      />
      <div className="relative w-full">
        <h1 className="font-bold text-xl">
          {author_name} {author_surname}
        </h1>
        <Time date={created_at} />
        <p>{body}</p>
      </div>
    </VariantsListItem>
  );
}
