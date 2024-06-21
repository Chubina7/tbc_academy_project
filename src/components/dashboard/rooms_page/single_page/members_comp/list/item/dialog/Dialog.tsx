"use client";

import { useContext } from "react";
import { MemberSettingsDialogContext as ctx } from "../../../../../../../../context/ctx";
import RemoveUserDialog from "./remove_user_dialog/RemoveUserDialog";
// import ChangeUserRoleDialog from "./change_user_role/ChangeUserRoleDialog";

interface Props {
  data: {
    user_id: string;
    room_id: string;
    username: string;
    surname: string | null;
  };
}

export default function Dialog({ data }: Props) {
  const { removeDialog, roleDialog, setRemoveDialog } = useContext(ctx);

  if ((removeDialog && roleDialog) || (!removeDialog && !roleDialog)) {
    return null;
  }

  if (removeDialog && !roleDialog) {
    return (
      <RemoveUserDialog
        modalHandler={() => setRemoveDialog(false)}
        data={data}
      />
    );
  }
  // if (roleDialog && !removeDialog) {
  //   return <ChangeUserRoleDialog modalHandler={() => setRoleDialog(false)} />;
  // }

  return null;
}
