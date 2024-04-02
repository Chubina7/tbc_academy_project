import Image from "next/image";
import React from "react";

const BlogItem = ({ title, description, imgSrc, date }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h1 className="font-bold text-xl sm:text-3xl">{title}</h1>
      <p>{description}</p>
      <div className="w-full flex justify-end">
        <button>Read more...</button>
      </div>
      <Image
        className="w-full rounded-md"
        src={imgSrc}
        alt={title}
        width={760}
        height={520}
      />
      <i className="w-full text-right">{date}</i>
    </div>
  );
};

export default BlogItem;
