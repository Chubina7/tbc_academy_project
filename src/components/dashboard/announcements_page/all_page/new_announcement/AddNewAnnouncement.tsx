import AddNewAnnouncementProvider from "../../../../../context/providers/AddNewAnnouncementProvider";
import Announcement from "./Announcement";
import Btn from "./Btn";
import SelectRoom from "./SelectRoom";
import Title from "./Title";

export default function AddNewAnnouncement() {
  return (
    <AddNewAnnouncementProvider>
      <div className="w-full max-w-4xl flex flex-col items-end gap-3">
        <div className="w-full flex gap-3">
          <Title />
          <SelectRoom />
        </div>
        <Announcement />
        <Btn />
      </div>
    </AddNewAnnouncementProvider>
  );
}
