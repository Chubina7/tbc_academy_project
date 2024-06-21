import BookshelfList from "../../../../../components/dashboard/bookshelf_page/list/BookshelfList";

const list = [
  {
    book_id: "B0001",
    book_title: "Intro to programming",
    book_description:
      "This is a good resource to learn alone is a good resource to learn alone is a good resource to learn alone is a good resource to learn alone is a good resource to learn alone is a good resource to learn alone ",
    book_type: "application/pdf" as BookTypes,
    author: {
      room: { room_id: "R0001", room_name: "GoodRoom" },
      user: { surname: "Erkemlise", user_id: "U1234", username: "Nugzara" },
    },
  },
  {
    book_id: "B0002",
    book_title: "Intro to programming",
    book_description:
      "This is a good resource to learn is a good resource to learn alone alone",
    book_type: "image/jpeg" as BookTypes,
    author: {
      room: null,
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

export default function BookshelfPage() {
  return (
    <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5 overflow-visible">
      <div>{/* filter */}</div>
      <BookshelfList data={list} />
    </div>
  );
}
