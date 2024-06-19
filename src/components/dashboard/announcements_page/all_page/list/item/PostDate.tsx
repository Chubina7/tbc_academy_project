"use client";

import useTimeAgo from "../../../../../../hooks/useTimeAgo";

interface Props {
  data: string;
}
export default function PostDate({ data }: Props) {
  const timeAgo = useTimeAgo(data);

  return <p className="opacity-60">{timeAgo}</p>;
}
