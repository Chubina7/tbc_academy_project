import React from "react";
import styles from "./BlogsGrid.module.css";
import BlogItem from "../blogItem/BlogItem";
import { blogData } from "../../../../data/blogs";

const BlogsGrid = () => {
  return (
    <section className={styles.grid}>
      {blogData.map((blog) => (
        <BlogItem
          date={blog.publish_date}
          description={blog.description}
          imgSrc={blog.image}
          title={blog.title}
        />
      ))}
    </section>
  );
};

export default BlogsGrid;
