import AddNewAnnouncementProvider from "../../../../../context/providers/AddNewAnnouncementProvider";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization_acts";
import { getUserRooms } from "../../../../../lib/helpers/server_act_funcs/user_relations";
import Announcement from "./Announcement";
import Btn from "./Btn";
import SelectRoom from "./room_selection/SelectRoom";
import Title from "./Title";

export default async function AddNewAnnouncement() {
  const { user_id } = await USER();
  const enrolledRooms = await getUserRooms(user_id);

  return (
    <AddNewAnnouncementProvider>
      <div className="w-full max-w-4xl flex flex-col items-end gap-3">
        <div className="w-full flex gap-3">
          <Title />
          <SelectRoom roomList={enrolledRooms} />
        </div>
        <Announcement />
        <Btn />
      </div>
    </AddNewAnnouncementProvider>
  );
}
