"use client";

import useTimeAgo from "../../../../../../../hooks/useTimeAgo";

interface Props {
  at: string;
}

export default function TimeAgo({ at }: Props) {
  const ago = useTimeAgo(at);

  return <p className="w-fit text-xs text-nowrap">{ago}</p>;
}
