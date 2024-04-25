import React from "react";
import Tags from "../blogComp/Tags";
import ReviewNStars from "./ReviewNStars";
import AuthorInfo from "./AuthorInfo";

function Heading({ name, tags, rating, reviewCount, userId }) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-1">
      <h1 className="font-bold text-2xl md:text-4xl">{name}</h1>
      <div className="w-full flex justify-between items-center">
        <Tags list={tags} />
        <ReviewNStars rating={rating} reviewCount={reviewCount} />
      </div>
      <AuthorInfo userId={userId} />
    </div>
  );
}

export default Heading;
