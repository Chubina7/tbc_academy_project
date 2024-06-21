"use client";

import { useEffect, useState } from "react";

export default function useTimeAgo(posted_at: string) {
  const [timeAgo, setTimeAgo] = useState<string>(calculateTimeAgo(posted_at));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(posted_at));
    }, 60000);

    return () => clearInterval(interval);
  }, [posted_at]);

  function calculateTimeAgo(dateString: string): string {
    const now = new Date();
    const postedTime = new Date(dateString);
    const timeDifference = now.getTime() - postedTime.getTime();

    const seconds = Math.floor(timeDifference / 1000);

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} year${years === 1 ? "" : "s"} ago`;
    } else if (months > 0) {
      return `${months} month${months === 1 ? "" : "s"} ago`;
    } else if (days > 0) {
      return `${days} day${days === 1 ? "" : "s"} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else {
      return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
    }
  }

  return timeAgo;
}
