import React, { Component } from "react";
import ProductContentDetails from "./ProductContent/ProductContentDetails";
import styles from "./ProductDetails.module.css";
import ProductImageDetails from "./ProductImagery/ProductImageDetails";

class ProductDetails extends Component {
  render() {
    return (
      <div className={styles.ProductDetails}>
        <ProductImageDetails />
        <ProductContentDetails />
      </div>
    );
  }
}

export default ProductDetails;
