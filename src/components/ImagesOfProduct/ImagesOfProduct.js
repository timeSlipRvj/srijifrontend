import React, { Component } from "react";
import styles from "./ImagesOfProducts.module.css";
// import { Button } from "react-bootstrap";
import Carousels from "../CarouselCard/Carousel/Carousel";

class ImagesOfProducts extends Component {
  render() {
    return (
      <div className={styles.ImagesOfProducts}>
        <Carousels data={this.props.data} />
      </div>
    );
  }
}

export default ImagesOfProducts;
