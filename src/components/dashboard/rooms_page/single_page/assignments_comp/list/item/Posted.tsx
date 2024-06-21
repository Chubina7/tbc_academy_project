"use client";

import useTimeAgo from "../../../../../../../hooks/useTimeAgo";

interface Props {
  created_at: string;
}

export default function Posted({ created_at }: Props) {
  const timeAgo = useTimeAgo(created_at);
  
  return <p>Posted {timeAgo}</p>;
}
