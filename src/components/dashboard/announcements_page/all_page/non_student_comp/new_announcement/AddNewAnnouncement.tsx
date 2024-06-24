import AddNewAnnouncementProvider from "../../../../../../context/providers/AddNewAnnouncementProvider";
import Announcement from "./Announcement";
import Btn from "./Btn";
import SelectRoom from "./room_selection/SelectRoom";
import Title from "./Title";

interface Props {
  enrolledRoomList: Array<{ room_id: string; room_name: string }>;
  cancelAddition: () => void;
}

export default function AddNewAnnouncement({
  enrolledRoomList,
  cancelAddition,
}: Props) {
  return (
    <AddNewAnnouncementProvider>
      <div className="w-full max-w-4xl flex flex-col items-end gap-3">
        <div className="w-full flex gap-3">
          <Title />
          <SelectRoom roomList={enrolledRoomList} />
        </div>
        <Announcement />
        <Btn cancelAddition={cancelAddition} />
      </div>
    </AddNewAnnouncementProvider>
  );
}
