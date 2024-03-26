import React from "react";
import styles from "./Blog.module.css";
import BlogsGrid from "../../components/blogPageComponents/blog/blogsGrid/BlogsGrid";
import Heading from "../../components/blogPageComponents/heading/Heading";

const Blog = () => {
  return (
    <div className={styles.wrapper}>
      <Heading />
      <BlogsGrid />
    </div>
  );
};

export default Blog;
