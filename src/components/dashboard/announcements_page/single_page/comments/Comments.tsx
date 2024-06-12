import List from "./List";
import Sorter from "./Sorter";

interface Props {
  list: Array<IAnnouncementComment>;
}

export default function Comments({ list }: Props) {
  return (
    <>
      <div className="w-full max-w-4xl flex justify-between items-center">
        <h1 className="w-full max-w-4xl font-bold text-2xl">All Comments</h1>
        <Sorter />
      </div>
      <List data={list} />
    </>
  );
}
