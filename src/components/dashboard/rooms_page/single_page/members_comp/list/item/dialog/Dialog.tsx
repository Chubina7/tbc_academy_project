"use client";

import { useContext } from "react";
import { MemberSettingsDialogContext as ctx } from "../../../../../../../../context/ctx";
import RemoveUserDialog from "./remove_user_dialog/RemoveUserDialog";
import ChangeUserRoleDialog from "./change_user_role/ChangeUserRoleDialog";

export default function Dialog() {
  const { removeDialog, roleDialog, setRemoveDialog, setRoleDialog } =
    useContext(ctx);

  if ((removeDialog && roleDialog) || (!removeDialog && !roleDialog)) {
    return null;
  }

  if (removeDialog && !roleDialog) {
    return <RemoveUserDialog modalHandler={() => setRemoveDialog(false)} />;
  }
  if (roleDialog && !removeDialog) {
    return <ChangeUserRoleDialog modalHandler={() => setRoleDialog(false)} />;
  }

  return null;
}
