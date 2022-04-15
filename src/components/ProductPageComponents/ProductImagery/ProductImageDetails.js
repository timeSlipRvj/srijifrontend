import React, { Component } from "react";
import styles from "./ProductImageDetails.module.css";
// import TestImage5 from "../../../images/testimage5.jpg";
// import TestImage1 from "../../../images/testimage1.jpg";
// import TestImage6 from "../../../images/testimage6.jpg";
import { connect } from "react-redux";
import { baseUrl } from "../../../api";
class ProductImageDetails extends Component {
  state = {
    ImageShown: "0",
  };
  render() {
    return (
      <div className={styles.ProductImageDetails}>
        {/* {console.log(this.props.product.product.data.baseImage.image)} */}
        {this.state.ImageShown === "0" && (
          <img
            className={styles.ProductImage}
            src={baseUrl + this.props.product.product?.data?.baseImage?.image}
            alt="image1"
          ></img>
        )}
        {this.props.product.product?.data?.additionalImages.map(
          (item, key) =>
            this.state.ImageShown === key && (
              <img
                key={key}
                className={styles.ProductImage}
                src={baseUrl + item.image}
                alt={"image" + key}
                onClick={() => this.setState({ ImageShown: key })}
              ></img>
            )
        )}

        <div className={styles.ImageSlider}>
          {/* {console.log(this.props.product.product?.data?.additionalImages)} */}
          {this.props.product.product?.data?.additionalImages.map(
            (item, key) => (
              <img
                key={key}
                className={styles.SlideImages}
                src={baseUrl + item.image}
                onClick={() => this.setState({ ImageShown: key })}
                alt="image2"
              ></img>
            )
          )}
          <img
            className={styles.SlideImages}
            src={baseUrl + this.props.product.product?.data?.baseImage?.image}
            alt="image1"
          ></img>
          {/* <img
            className={styles.SlideImages}
            onClick={() => this.setState({ ImageShown : "1" })}
            src={TestImage5}
            alt="image1"
          ></img>
          <img
            className={styles.SlideImages}
            onClick={() => this.setState({ ImageShown: "2" })}
            src={TestImage1}
            alt="image2"
          ></img>
          <img
            className={styles.SlideImages}
            onClick={() => this.setState({ ImageShown: "3" })}
            src={TestImage6}
            alt="image3"
          ></img>
          <img
            className={styles.SlideImages}
            onClick={() => this.setState({ ImageShown: "4" })}
            src={TestImage1}
            alt="image4"
          ></img>
          <img
            className={styles.SlideImages}
            onClick={() => this.setState({ ImageShown: "5" })}
            src={TestImage5}
            alt="image5"
          ></img>
          <img
            className={styles.SlideImages}
            onClick={() => this.setState({ ImageShown: "6" })}
            src={TestImage1}
            alt="image6"
          ></img> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ product: state.productDetails });
export default connect(mapStateToProps, {})(ProductImageDetails);
