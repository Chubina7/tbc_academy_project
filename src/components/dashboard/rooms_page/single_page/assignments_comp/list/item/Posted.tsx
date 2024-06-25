"use client";

import { useTranslations } from "next-intl";
import useTimeAgo from "../../../../../../../hooks/useTimeAgo";

interface Props {
  created_at: string;
}

export default function Posted({ created_at }: Props) {
  const timeAgo = useTimeAgo(created_at);
  const t = useTranslations("dashboard.pages.rooms.singlePage");

  return (
    <p>
      {t("postedAgo")} {timeAgo}
    </p>
  );
}
