import List from "./List";
import Sorter from "./Sorter";

export default function Comments() {
  return (
    <>
      <div className="w-full max-w-4xl flex justify-between items-center">
        <h1 className="w-full max-w-4xl font-bold text-2xl">Comments</h1>
        <Sorter />
      </div>
      <List />
    </>
  );
}
