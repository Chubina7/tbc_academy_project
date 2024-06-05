import RoomImage from "./RoomImage";
import CategoryList from "./CategoryList";
import EnrolledNum from "./EnrolledNum";
import Link from "next/link";
import CreatedAt from "./CreatedAt";
import Author from "./Author";
import VariantsListItem from "../../../../ui/framerMotionDivs/variants/VariantsListItem";

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
    <VariantsListItem className="h-full">
      <Link
        href={`/dashboard/rooms/${room_id}`}
        className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden | h-full flex flex-col justify-start items-start shadow-custom transition-all duration-300 "
      >
        <RoomImage src={image} />
        <div className="w-full h-full flex flex-col justify-center items-end py-3">
          <h1 className="w-full font-bold text-xl px-5 truncate">
            {room_name}
          </h1>
          <CategoryList categories={category} />
          <p className="w-full text-sm px-5">{description}</p>
          <div className="w-full flex flex-grow justify-between items-end py-3 px-5 text-sm text-nowrap">
            <EnrolledNum number={enrolled_number} />
            <Author teacher={teacher} />
            <CreatedAt created_at={created_at} />
          </div>
        </div>
      </Link>
    </VariantsListItem>
  );
}
