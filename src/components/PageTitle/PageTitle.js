import React, { Component } from "react";
import styles from "./PageTitle.module.css";

class PageTitle extends Component {
  render() {
    return (
      <div className={styles.Title}>
        {this.props.title ? this.props.title : "New Arrivals"}
      </div>
    );
  }
}

export default PageTitle;
