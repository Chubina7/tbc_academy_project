import Member from "./Member";

export default function List() {
  return (
    <div className="w-full h-full overflow-scroll scroll-hidden flex justify-start items-start flex-col gap-6 sm:px-3 ">
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
    </div>
  );
}
