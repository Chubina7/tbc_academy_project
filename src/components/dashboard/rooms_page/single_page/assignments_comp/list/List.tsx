import Assignment from "./Assignment";

export default function List() {
  return (
    <div className="w-full 2xl:max-h-60 overflow-scroll scroll-hidden flex flex-col justify-start items-start">
      <Assignment />
      <Assignment />
      <Assignment />
      <Assignment />
      <Assignment />
    </div>
  );
}
