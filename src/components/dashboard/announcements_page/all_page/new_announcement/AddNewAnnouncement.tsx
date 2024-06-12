import Announcement from "./Announcement";
import SelectRoom from "./SelectRoom";
import Title from "./Title";

export default function AddNewAnnouncement() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-end gap-3">
      <div className="w-full flex gap-3">
        <Title />
        <SelectRoom />
      </div>
      <Announcement />
      <button className="px-3 py-1 bg-red-400 rounded-lg">Announce</button>
    </div>
  );
}
