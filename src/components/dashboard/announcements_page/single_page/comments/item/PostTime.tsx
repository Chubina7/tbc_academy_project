"use client";

import useTimeAgo from "../../../../../../hooks/useTimeAgo";

interface Props {
  commented_at: string;
}

export default function PostTime({ commented_at }: Props) {
  const timeAgo = useTimeAgo(commented_at);

  return <p className="sm:w-28 text-nowrap text-sm text-center">{timeAgo}</p>;
}
