/* eslint-disable no-unreachable */
import React, { Component } from "react";
import styles from "./SingleBlogContent.module.css";
// import TestImage4 from "../../../images/testimage4.jpg";
import { baseUrl } from "../../../api";

class SingleBlogContent extends Component {
  render() {
    return (
      <div className={styles.SingleBlogContent}>
        <div className={styles.BlogName}>{this.props.data?.heading}</div>
        <div className={styles.AuthorAndTime}>
          <span className={styles.BlogAuthor}>
            {this.props.data?.user?.Email}
          </span>
          {/* <span className={styles.Time}>4 min</span> */}
        </div>
        <div className={styles.BlogImagePart}>
          <img
            className={styles.BlogImage}
            src={baseUrl + this.props.data?.img?.image}
            alt="BlogImage"
          />
        </div>
        <div
          className={styles.TextContent}
          dangerouslySetInnerHTML={{ __html: this.props.data?.body }}
        ></div>
      </div>
    );
  }
}
export default SingleBlogContent;
