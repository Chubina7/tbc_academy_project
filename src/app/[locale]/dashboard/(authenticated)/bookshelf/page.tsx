import BookshelfList from "../../../../../components/dashboard/bookshelf_page/list/BookshelfList";

export default function BookshelfPage() {
  return (
    <div className="w-full min-h-screen flex flex-col px-3 md:px-7 pt-1 gap-5">
      <h1>FILTER</h1>
      <BookshelfList />
    </div>
  );
}
