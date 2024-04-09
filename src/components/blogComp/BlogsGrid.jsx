import React from "react";
import BlogItem from "./BlogItem";

const BlogsGrid = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-16">
      {data.map((item) => (
        <BlogItem
          key={item.id}
          id={item.id}
          title={item.name}
          description={item.description}
          imgSrc={item.image}
          date={item.publish_date}
        />
      ))}
    </div>
  );
};

export default BlogsGrid;
