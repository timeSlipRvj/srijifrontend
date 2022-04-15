import React, { Component } from "react";
import styles from "./Tagline.module.css";

class Tagline extends Component {
    render() {
        return (
            <div className={this.props.nvbar ? styles.TaglineInNavbar : styles.Tagline}>
                <p className={styles.TaglinePara}>worship with best quality products</p>
            </div>
        )
    }
}

export default Tagline;