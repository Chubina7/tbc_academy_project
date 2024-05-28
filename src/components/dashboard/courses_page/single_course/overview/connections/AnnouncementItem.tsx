import Image from "next/image";
import backup_img from "/public/anonym_user.webp";

interface Props {
  data: any;
}

export default function AnnouncementItem({ data }: Props) {
  const { author_username, announcement } = data;
  return (
    <div className="w-full flex justify-start items-center gap-3 p-3 px-5 hover:bg-[#5C5470]">
      <Image
        src={backup_img}
        alt={""}
        width={64}
        height={64}
        className="rounded-xl w-12 h-12 object-cover cursor-pointer"
      />
      <div className="relative w-full">
        <h1 className="font-bold text-xl">{author_username}</h1>
        <p className="absolute top-0 right-0 font-normal text-sm"> 1 min ago</p>
        <p>{announcement}</p>
      </div>
    </div>
  );
}
