import React from "react";
import { IoEllipse, IoEllipseOutline } from "react-icons/io5";

interface Props {
  condition: boolean;
}

export default function OnMobile({ condition }: Props) {
  return (
    <>
      {condition ? (
        <IoEllipse size={16} className="lg:hidden" />
      ) : (
        <IoEllipseOutline size={16} className="lg:hidden" />
      )}
    </>
  );
}
