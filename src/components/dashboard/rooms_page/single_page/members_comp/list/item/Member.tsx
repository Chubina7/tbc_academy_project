import MemberSettingsDialogProvider from "../../../../../../../context/providers/MemberSettingsDialogProvider";
import { USER } from "../../../../../../../lib/helpers/server_act_funcs/authorization_acts";
import MemberUi from "./ui/MemberUi";

interface Props {
  data: IRoomMember;
  room_id: string;
}

export default async function Member({ data, room_id }: Props) {
  const { role } = await USER();

  return (
    <MemberSettingsDialogProvider>
      <MemberUi
        data={data}
        room_id={room_id}
        isTeacherOrAdmin={role !== "student"}
      />
    </MemberSettingsDialogProvider>
  );
}
