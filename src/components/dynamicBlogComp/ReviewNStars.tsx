import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

function ReviewNStars({
  rating,
  reviewCount,
}: {
  rating: number | undefined;
  reviewCount: number | undefined;
}) {
  return (
    <div className="hidden md:flex justify-center items-center gap-2">
      {rating}
      <FaRegStar size={20} />
      {reviewCount}
      <MdOutlineRateReview size={20} />
    </div>
  );
}

export default ReviewNStars;
