import { IoPersonOutline } from "react-icons/io5";

export default function AuthorDetails() {
  return (
    <div className="w-full flex gap-2 justify-start items-center opacity-60">
      <IoPersonOutline size={24} />
      <h1>NAME SURNAME - ROOM TITLE</h1>
    </div>
  );
}
