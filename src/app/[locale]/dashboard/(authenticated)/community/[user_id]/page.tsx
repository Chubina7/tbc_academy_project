import UserInformation from "../../../../../../components/dashboard/profile_page/user_intormation/UserInformation";
import UserRooms from "../../../../../../components/dashboard/profile_page/user_rooms/UserRooms";

export default function ProfilePage() {
  return (
    <div className="w-full flex flex-col gap-5">
      <UserInformation />
      <UserRooms />
      {/* other components */}
    </div>
  );
}
