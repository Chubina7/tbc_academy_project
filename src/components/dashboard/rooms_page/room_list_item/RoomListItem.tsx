import RoomImage from "./RoomImage";
import CategoryList from "./CategoryList";
import EnrolledNum from "./EnrolledNum";
import Link from "next/link";
import CreatedAt from "./CreatedAt";
import Author from "./Author";

export default function RoomListItem() {
  return (
    <Link
      href="/"
      className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl overflow-hidden | flex flex-col justify-center items-start shadow-custom transition-all duration-300 hover:scale-105"
    >
      <RoomImage />
      <div className="w-full flex flex-col justify-center items-end py-3">
        <h1 className="w-full font-bold text-xl px-5">Lorem ipsum dolor sit</h1>
        <CategoryList />
        <p className="opacity-60 text-sm px-5">
          Lorem ipsum dolor sit, amet consectetur ade, quas! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Itaque, illo!
        </p>
        <div className="w-full flex justify-between items-center my-4 px-5 opacity-60 text-sm text-nowrap">
          <EnrolledNum />
          <Author />
          <CreatedAt />
        </div>
      </div>
    </Link>
  );
}
