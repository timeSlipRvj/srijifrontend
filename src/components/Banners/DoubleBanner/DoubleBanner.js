import React, { Component } from "react";
import styles from "./DoubleBanner.module.css";
import TestImage7 from "../../../images/testimage7.jpg";
import { baseUrl } from "../../../api";
class DoubleBanner extends Component {
  render() {
    return (
      <div className={styles.Section2}>

        {this.props.data.loading ? (
          <h2>Loading</h2>
        ) : (
          <React.Fragment>
             {/* { console.log(baseUrl , this.props.data.data[2].Banners[0].Image.image)} */}
            <img
              className={styles.DoubleBanner}
              src={TestImage7}
              alt="DoubleBanner"
            />
            <img
              className={styles.DoubleBanner}
              src={TestImage7}
              alt="DoubleBanner"
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default DoubleBanner;
