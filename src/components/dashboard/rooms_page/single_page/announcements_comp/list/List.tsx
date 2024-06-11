import Announcement from "./Announcement";

export default function List() {
  return (
    <div className="w-full sm:h-[254px] sm:overflow-y-scroll scroll-hidden flex flex-col">
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
      <Announcement />
    </div>
  );
}
