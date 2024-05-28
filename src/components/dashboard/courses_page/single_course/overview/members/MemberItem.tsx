import VariantsListItem from "../../../../../ui/framerMotionDivs/variants/VariantsListItem";
import Image from "next/image";
import backup_img from "/public/anonym_user.webp";
import { IoEllipsisHorizontal } from "react-icons/io5";

interface Props {
  data: any;
}

export default function MemberItem({ data }: Props) {
  const { username, email } = data;

  return (
    <VariantsListItem className="w-full flex justify-start items-center gap-3 p-3 px-5">
      <Image
        src={backup_img}
        alt={username}
        width={64}
        height={64}
        className="rounded-xl w-12 h-12 object-cover cursor-pointer"
      />
      <div className="w-full flex flex-col">
        <h1 className="relative font-bold text-lg">
          {username}
          <IoEllipsisHorizontal
            size={18}
            className="absolute right-0 top-[50%] transform translate-y-[-50%] cursor-pointer hover:scale-110"
          />
        </h1>
        <p className="w-full text-sm">{email}</p>
      </div>
    </VariantsListItem>
  );
}
