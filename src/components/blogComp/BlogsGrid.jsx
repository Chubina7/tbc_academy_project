import React from "react";
import { blogData } from "../../data/blogs";
import BlogItem from "./BlogItem";

const BlogsGrid = () => {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-16">
      {blogData.map((blog) => (
        <BlogItem
          key={blog.publish_date}
          title={blog.title}
          description={blog.description}
          imgSrc={blog.image}
          date={blog.publish_date}
        />
      ))}
    </div>
  );
};

export default BlogsGrid;
