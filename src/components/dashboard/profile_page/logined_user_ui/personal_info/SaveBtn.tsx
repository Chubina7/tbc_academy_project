"use client";

import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../context/ctx";

interface Props {
  prevValues: {
    username: string;
    profile_picture: string | null;
    surname: string | null;
    birth_date: string | null;
  };
}

const condition = (obj1: any, obj2: any) => {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return true;
    }
  }
  return false;
};

export default function SaveBtn({ prevValues }: Props) {
  const { value } = useContext(ctx);

  if (condition(prevValues, value))
    return (
      <button className="px-3 py-1 rounded-lg bg-red-400">
        Save <span className="hidden md:inline-block">Changes</span>
      </button>
    );

  return null;
}
