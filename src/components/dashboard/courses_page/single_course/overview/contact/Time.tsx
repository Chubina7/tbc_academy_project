"use client";

import { useEffect, useState } from "react";

interface Props {
  date: string;
}

export default function Time({ date }: Props) {
  const [timeDifference, setTimeDifference] = useState<string>("");

  useEffect(() => {
    const getTimeDifference = (createdAt: Date): string => {
      const currentTime = new Date();
      const timeDifference = currentTime.getTime() - createdAt.getTime();
      const secondsDifference = Math.floor(timeDifference / 1000);

      const intervals = {
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        minute: 60,
      };

      const years = Math.floor(secondsDifference / intervals.year);
      const months = Math.floor(secondsDifference / intervals.month);
      const days = Math.floor(secondsDifference / intervals.day);
      const hours = Math.floor(secondsDifference / intervals.hour);
      const minutes = Math.floor(secondsDifference / intervals.minute);

      if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
      if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
      if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      return "Just now";
    };

    const createdAt = new Date(date);
    const timeDifference = getTimeDifference(createdAt);
    setTimeDifference(timeDifference);

    const interval = setInterval(() => {
      const newTimeDifference = getTimeDifference(createdAt);
      setTimeDifference(newTimeDifference);
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <p className="absolute top-0 right-0 font-normal text-sm">
      {timeDifference}
    </p>
  );
}
