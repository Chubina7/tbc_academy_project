import MemberSettingsDialogProvider from "../../../../../../../context/providers/MemberSettingsDialogProvider";
import { USER } from "../../../../../../../lib/helpers/server_act_funcs/authorization";
import MemberUi from "./ui/MemberUi";

export default async function Member() {
  const { role } = await USER();

  return (
    <MemberSettingsDialogProvider>
      <MemberUi isTeacher={role === "teacher"} />
    </MemberSettingsDialogProvider>
  );
}
