"use client";

import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import {
  dislikeComment,
  likeComment,
} from "../../../../../../lib/helpers/server_act_funcs/announcement_comment_acts";
import { useRouter } from "next/navigation";

interface Props {
  num: number;
  isLiked: boolean;
  comment_id: string;
}

export default function Likes({ num, isLiked, comment_id }: Props) {
  const [like, setLike] = useState(isLiked);
  const [quantity, setQuantity] = useState(num);
  const router = useRouter();
  const handleCommentLiking = async () => {
    setLike((prev) => !prev);

    if (like) {
      setQuantity((prev) => prev - 1);
      await dislikeComment(comment_id);
    } else {
      setQuantity((prev) => prev + 1);
      await likeComment(comment_id);
    }

    router.refresh();
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-start">
      <button onClick={handleCommentLiking}>
        {like ? <IoHeart size={24} /> : <IoHeartOutline size={24} />}
      </button>
      <p className="text-sm opacity-60">{quantity}</p>
    </div>
  );
}
