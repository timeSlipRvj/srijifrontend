import React, { Component } from "react";
import Description from "./Description/Description";
import styles from "./ProductReviews.module.css";
import Reviews from "./Reviews/Reviews";
import Specifications from "./Specifications/Specifications";

class ProductReviews extends Component {
    state = {
        showBox: "Reviews",
    }
  render() {
    return (
      <div className={styles.ProductReviews}>
        <div className={styles.icons}>
                {/* <span className={styles.Description} onClick={() => {
                    this.setState({
                      ...this.state,
                      showBox: "Description",
                    });
                  }}>Description</span>
                <span className={styles.Specifications} onClick={() => {
                    this.setState({
                      ...this.state,
                      showBox: "Specifications",
                    });
                  }}>Specifications</span> */}
                <span className={styles.Reviews} onClick={() => {
                    this.setState({
                      ...this.state,
                      showBox: "Reviews",
                    });
                  }}>Reviews</span>
            </div>
            <div className={styles.ShowBox}>
              {this.state.showBox === "Description" && <Description />}
              {this.state.showBox === "Reviews" && <Reviews />}
              {this.state.showBox === "Specifications" && <Specifications />}
            </div>
      </div>
    );
  }
}

export default ProductReviews;
