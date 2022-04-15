import React, { Component } from "react";
import styles from "./BlogCardsList.module.css";
import BlogCard from "./BlogCard/BlogCard";

class BlogCardsList extends Component {
  render() {
    return (
      <div>
        <div className={styles.BlogCardsList}>
          {this.props.data
            ? this.props.data.map((single, key) => <BlogCard key={key} data={single} />)
            : undefined}
          {/* <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard /> */}
        </div>
      </div>
    );
  }
}

export default BlogCardsList;
