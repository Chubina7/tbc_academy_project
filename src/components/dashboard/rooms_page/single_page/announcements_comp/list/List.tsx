import Announcement from "./Announcement";

export default function List() {
  return (
    <div className="w-full flex flex-col gap-5 sm:px-3">
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
    </div>
  );
}
