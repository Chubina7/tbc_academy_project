import EditBtn from "./edit_btn/EditBtn";
import ProfPic from "./ProfPic";
import ContactInfo from "./ContactInfo";
import Dialog from "./dialog/Dialog";
import MemberSettingsDialogProvider from "../../../../../../../context/providers/MemberSettingsDialogProvider";
import { USER } from "../../../../../../../lib/helpers/server_act_funcs/authorization";

export default async function Member() {
  const { role } = await USER();

  return (
    <MemberSettingsDialogProvider>
      <div className="w-full flex justify-between items-center gap-2 px-3 sm:px-6 py-4 hover:bg-red-300 hover:dark:bg-[#5C5470]">
        <div className="w-full flex justify-start items-center gap-2">
          <ProfPic />
          <ContactInfo />
        </div>
        {role === "teacher" && <EditBtn />}
        <Dialog />
      </div>
    </MemberSettingsDialogProvider>
  );
}
