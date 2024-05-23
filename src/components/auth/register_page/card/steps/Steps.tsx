"use client";

import React from "react";
import ChooseRole from "./ChooseRole";
import EnterPersonalDetails from "./presonal_details/EnterPersonalDetails";
import EnterCredentials from "./acc_credentials/EnterCredentials";
import Heading from "./Heading";

export default function Steps() {
  return (
    <>
      <Heading subHeading={"TEST SUB HEADING"} />
      <ChooseRole />
      <EnterPersonalDetails />
      <EnterCredentials />
    </>
  );
}
