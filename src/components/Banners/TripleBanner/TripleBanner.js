import React, { Component } from "react";
import styles from "./TripleBanner.module.css"
import TestImage7 from "../../../images/testimage7.jpg"


class TripleBanner extends Component {
    render() {
        return ( 
                <div className={styles.Section3}>
                    <img className={styles.TripleBanner} src={TestImage7} alt="TripleBanner"/>
                    <img className={styles.TripleBanner} src={TestImage7} alt="TripleBanner"/>
                    <img className={styles.TripleBanner} src={TestImage7} alt="TripleBanner"/>
                </div>
        )
    }
}

export default TripleBanner;