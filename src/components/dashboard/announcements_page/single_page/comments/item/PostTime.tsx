"use client";

import useTimeAgo from "../../../../../../hooks/useTimeAgo";

interface Props {
  commented_at: string;
}

export default function PostTime({ commented_at }: Props) {
  const timeAgo = useTimeAgo(commented_at);

  return <p className="text-nowrap text-sm">{timeAgo}</p>;
}
