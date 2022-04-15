/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import styles from "./Copyright.module.css";

class Copyright extends Component {
  render() {
    return (
      <div className={styles.Copyright}>
        <p>{this.props.text} &#169;</p>
      </div>
    );
  }
}

export default Copyright;
