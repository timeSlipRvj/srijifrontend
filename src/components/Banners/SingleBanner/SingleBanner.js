import React, { Component } from "react";
import styles from "./SingleBanner.module.css"
import TestImage7 from "../../../images/testimage7.jpg"


class SingleBanner extends Component {
    render() {
        return (
                <div className={styles.Section1}>
                    <img className={styles.SingleBanner} src={TestImage7} alt="SingleBanner"/>
                </div>
     
        )
    }
}

export default SingleBanner;