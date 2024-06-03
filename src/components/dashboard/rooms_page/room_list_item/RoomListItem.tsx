import RoomImage from "./RoomImage";
import CategoryList from "./CategoryList";
import EnrolledNum from "./EnrolledNum";
import Link from "next/link";
import CreatedAt from "./CreatedAt";
import Author from "./Author";

export default function RoomListItem({
  room_id,
  category,
  created_at,
  description,
  enrolled_number,
  room_name,
  teacher,
  image,
}: IRoom) {
  return (
    <Link
      href={`/dashboard/rooms/${room_id}`}
      className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden | flex flex-col justify-center items-start shadow-custom transition-all duration-300 hover:scale-105"
    >
      <RoomImage src={image} />
      <div className="w-full flex flex-col justify-center items-end py-3">
        <h1 className="w-full font-bold text-xl px-5">{room_name}</h1>
        <CategoryList categories={category} />
        <p className="opacity-60 text-sm px-5">{description}</p>
        <div className="w-full flex justify-between items-center my-4 px-5 opacity-60 text-sm text-nowrap">
          <EnrolledNum number={enrolled_number} />
          <Author teacher={teacher} />
          <CreatedAt created_at={created_at} />
        </div>
      </div>
    </Link>
  );
}
