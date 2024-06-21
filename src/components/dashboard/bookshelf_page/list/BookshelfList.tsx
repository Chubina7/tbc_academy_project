import { USER } from "../../../../lib/helpers/server_act_funcs/authorization";
import VariantsList from "../../../ui/framerMotionDivs/variants/VariantsList";
import CreateNew from "./create_new/CreateNew";
import BookshelfListItem from "./item/BookshelfListItem";

const list = [
  {
    book_id: "B0001",
    book_title: "Intro to programming",
    book_description: "This is a good resource to learn alone",
    book_type: "application/pdf" as BookTypes,
    author: {
      room: { room_id: "R0001", room_name: "GoodRoom" },
      user: { surname: "Erkemlise", user_id: "U1234", username: "Nugzara" },
    },
  },
  {
    book_id: "B0002",
    book_title: "Intro to programming",
    book_description: "This is a good resource to learn alone",
    book_type: "image/jpeg" as BookTypes,
    author: {
      room: { room_id: "R0001", room_name: "GoodRoom" },
      user: { surname: "Erkemlise", user_id: "U1234", username: "Nugzara" },
    },
  },
  {
    book_id: "B0003",
    book_title: "Intro to programming",
    book_description: "This is a good resource to learn alone",
    book_type: "application/msword" as BookTypes,
    author: {
      room: { room_id: "R0001", room_name: "GoodRoom" },
      user: { surname: "Erkemlise", user_id: "U1234", username: "Nugzara" },
    },
  },
];

export default async function BookshelfList() {
  const { role } = await USER();

  return (
    <VariantsList className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
      {role !== "student" && <CreateNew />}
      {list.map((item) => (
        <BookshelfListItem key={item.book_id} data={item} />
      ))}
    </VariantsList>
  );
}
