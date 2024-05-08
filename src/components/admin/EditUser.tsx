"use client";

import React from "react";
import { editUser } from "../../lib/helpers";
import { BsPencilFill } from "react-icons/bs";

export default function EditUser({ id }: { id: string }) {
  return (
    <BsPencilFill size={20} onClick={() => editUser(id)} cursor="pointer" />
  );
}
