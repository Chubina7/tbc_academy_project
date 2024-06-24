"use client";

import { IoCalendarClearOutline } from "react-icons/io5";
import useTimeAgo from "../../../../../hooks/useTimeAgo";
import React from "react";

interface Props {
  created_at: string;
}

function CreatedAt({ created_at }: Props) {
  const ago = useTimeAgo(created_at);

  return (
    <div className="w-fit flex gap-1 justify-center items-center">
      <p>{ago}</p>
      <IoCalendarClearOutline size={18} />
    </div>
  );
}

const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.created_at === nextProps.created_at;
};

export default React.memo(CreatedAt, areEqual);
