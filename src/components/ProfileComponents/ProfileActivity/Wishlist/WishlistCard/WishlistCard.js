/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unreachable */
import React, { Component } from "react";
import styles from "../Wishlist.module.css";
// import TestImage5 from "../../../../../images/testimage5.jpg";
import { Button } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../../../../Redux/Actions/CartActions";
import { deleteWishlist } from "../../../../../Redux/Actions/WishlistActions";
import { baseUrl } from "../../../../../api";
class WishlistCard extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className={styles.ProductGrid}>
        <div className={styles.Count}>{this.props.no + 1}.</div>
        <div className={styles.ImagePartOrders}>
          <img
            className={styles.OrderProductImage}
            src={baseUrl + this.props.data?.baseImage?.image}
          />
        </div>
        <div className={styles.ProductDetails}>
          <div className={styles.ProductName}>{this.props.data.name}</div>
          <AiFillHeart
            className={styles.BsFillHeartFill}
            onClick={() => this.props.deleteWishlist(this.props.data._id)}
          />
          {this.props.data.options.length > 0 ? undefined : (
            <React.Fragment>
              <Button
                className={styles.AddToCardButton}
                onClick={() => {
                  this.props.addToCart(this.props.data._id, 1, null);
                }}
              >
                ADD TO CART
              </Button>
            </React.Fragment>
          )}
          {/* <Button
            className={styles.AddToCardButton}
            onClick={() => this.props.addToCart(this.props.data._id, 1)}
          >
            ADD TO CART
          </Button> */}
          <div className={styles.ProductTags}>Product Tags</div>
          <Link
            className={styles.ProductLink}
            to={"/product/" + this.props.data._id}
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { addToCart, deleteWishlist })(
  WishlistCard
);
