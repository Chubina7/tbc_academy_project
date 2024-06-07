import SortBtn from "./SortBtn";

export default function Heading() {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="w-full font-bold text-2xl">Grades</h1>
      <SortBtn />
    </div>
  );
}
