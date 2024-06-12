"use client";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

interface Props {
  num: number;
  isLiked: boolean;
}

export default function Likes({ num, isLiked }: Props) {
  const likeComment = () => {
    if (isLiked) {
      // remove like logic
    } else {
      // add like logic
    }
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-start">
      <button onClick={likeComment}>
        {isLiked ? <IoHeartOutline size={24} /> : <IoHeart size={24} />}
      </button>
      <p className="text-sm opacity-60">{num}</p>
    </div>
  );
}
