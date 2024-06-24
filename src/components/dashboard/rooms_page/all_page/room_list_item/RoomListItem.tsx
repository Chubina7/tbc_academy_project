import RoomImage from "./RoomImage";
import CategoryList from "./CategoryList";
import EnrolledNum from "./EnrolledNum";
import Link from "next/link";
import CreatedAt from "./CreatedAt";
import Author from "./Author";
import VariantsListItem from "../../../../ui/framerMotionDivs/variants/VariantsListItem";

interface Props {
  data: IRoom;
  role: RoleType;
}

export default function RoomListItem({ data, role }: Props) {
  return (
    <VariantsListItem className="h-full">
      <Link
        href={`/dashboard/rooms/${data.room_id}`}
        className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden | h-full flex flex-col justify-start items-start shadow-custom hover:scale-105 transition-all duration-300"
      >
        <RoomImage src={data.room_image} />
        <div className="w-full h-full flex flex-col justify-center items-end py-3">
          <h1 className="w-full font-bold text-xl px-5 truncate">
            {data.room_name}
          </h1>
          <CategoryList categories={data.category} />
          <p className="w-full text-sm px-5">{data.room_description}</p>
          <div className="w-full flex flex-grow justify-between items-end py-3 px-5 text-sm text-nowrap">
            <EnrolledNum number={data.enrolled_number} />
            {role === "student" ? (
              <Author teacher={data.teacher} />
            ) : (
              <CreatedAt created_at={data.created_at} />
            )}
          </div>
        </div>
      </Link>
    </VariantsListItem>
  );
}
