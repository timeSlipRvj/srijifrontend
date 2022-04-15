/* eslint-disable no-unreachable */
import React, { Component } from "react";
import styles from "./LogoImage.module.css";
// import testimage2 from "../../images/testimage2.jpg";
import { baseUrl } from "../../api";
class LogoImage extends Component {
  render() {
    return (
      <div className={styles.LogoHeading}>
        <div className={styles.heading}>
          <img
            className={styles.LogoImage}
            src={baseUrl + this.props.data}
            alt="LogoImage"
          />
        </div>
      </div>
    );
  }
}
export default LogoImage;
