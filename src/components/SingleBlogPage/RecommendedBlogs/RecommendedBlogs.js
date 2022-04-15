import React, { Component } from "react";
import BlogCard from "../../BlogCardsList/BlogCard/BlogCard";
// import BlogCardsList from "../../BlogCardsList/BlogCardsList";
import styles from "./RecommendedBlogs.module.css";

class RecommendedBlogs extends Component {
  render() {
    return (
      <div className={styles.RecommendedBlogs}>
        <div className={styles.Title}>RECOMMENDED</div>
        <div className={styles.BlogCardRecommended}>
          {this.props.data.slice(0,3).map((item, key) => (
            <BlogCard recommended data={item} key={key} />
          ))}
        </div>
      </div>
    );
  }
}
export default RecommendedBlogs;
