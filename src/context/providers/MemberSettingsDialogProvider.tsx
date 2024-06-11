"use client";

import { ReactNode, useState } from "react";
import { MemberSettingsDialogContext } from "../ctx";

interface Props {
  children: ReactNode;
}

export default function MemberSettingsDialogProvider({ children }: Props) {
  const [removeDialog, setRemoveDialog] = useState(false);
  const [roleDialog, setRoleDialog] = useState(false);

  return (
    <MemberSettingsDialogContext.Provider
      value={{
        removeDialog,
        roleDialog,
        setRemoveDialog,
        setRoleDialog,
      }}
    >
      {children}
    </MemberSettingsDialogContext.Provider>
  );
}
