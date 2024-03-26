import React from "react";
import styles from "./BlogItem.module.css";

const BlogItem = ({ title, description, imgSrc, date }) => {
  return (
    <div className={styles.blogPost}>
      <h1>{title}</h1>
      <p>{description}</p>
      <i>{date}</i>
      <img src={imgSrc} alt={title} />
      <div className={styles.action}>
        <button>Read more...</button>
      </div>
    </div>
  );
};

export default BlogItem;
