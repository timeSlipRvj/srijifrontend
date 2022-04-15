import React, { Component } from "react";
import styles from "./Card.module.css";
// import TestImage from "../../../images/testimage1.jpg";
import { MdFavorite } from "react-icons/md";
import { Button } from "react-bootstrap";
import { baseUrl } from "../../../api";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../../Redux/Actions/CartActions";
import { deleteCart } from "../../../Redux/Actions/CartActions";

import { addToWishlist } from "../../../Redux/Actions/WishlistActions";
import { deleteWishlist } from "../../../Redux/Actions/WishlistActions";
import Alert from "@material-ui/lab/Alert";

import { getUserId } from "../../../Redux/Actions/UserActions";

class Card extends Component {
  state = {
    ToFavorites: "",
    inCart: this.props.cart.cart.filter(
      (items) => items.product._id === this.props.data._id
    ),
    inWishlist: this.props.wishlist.wishlist.filter(
      (items) => items._id === this.props.data._id
    ),
    LoggedInStatus: this.props.user.loggedIn ? "signedin" : "",
    showAddedAlert: false,
    showRemovedAlert: false,
    addedToWishlistAlert: false,
    removedFromWishlistAlert: false,
    showLoginAlert: false,
  };
  render() {
    // const cart = this.props.cart.cart.filter((item) => {
    //   // console.log(item.product)
      // if (item.length !== 0) {
      //   if (item.product._id === this.props.data._id) {
    //       console.log("true for ", this.props.data.ID);
    //       this.setState({ ...this.state, inCart: true });
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // });

    // for (let i = 0; i <= cart.length; i++) {
    //   if (cart[i] === true) {
    //   }
    // }
    // console.log(this.props.data.ID, this.state.inCart);
    // console.log(this.props.cart);

    return (
      <div className={styles.Card}>
        <div className={styles.CardImagePart}>
          {/* {console.log(this.props.data.baseImage.image)} 
         baseUrl+this.props.data.baseImage.image
         */}
          <Link to={"/product/" + this.props.data._id}>
            <img
              className={styles.CardImage}
              src={baseUrl + this.props.data.baseImage?.image}
              // src={TestImage}
              alt=""
            />
          </Link>
          {this.state.inWishlist.length === 0 && (
            <MdFavorite
              className={styles.MdFavorite}
              onClick={() => {
                this.setState({
                  ...this.state,
                  ToFavorites: "add",
                  addedToWishlistAlert: true,
                });
                this.props.addToWishlist(this.props.data._id);
                setTimeout(() => {
                  this.setState({
                    ...this.state,
                    addedToWishlistAlert: false,
                    inWishlist: this.props.wishlist.wishlist.filter(
                      (items) => items._id === this.props.data._id
                    ),
                  });
                }, 2000);
              }}
            />
          )}
          {this.state.inWishlist.length !== 0 && (
            <MdFavorite
              className={styles.MdFavoriteLiked}
              onClick={() => {
                this.setState({
                  ...this.state,
                  ToFavorites: "",
                  removedFromWishlistAlert: true,
                });
                this.props.deleteWishlist(this.props.data._id);
                setTimeout(() => {
                  this.setState({
                    ...this.state,
                    removedFromWishlistAlert: false,
                    inWishlist: this.props.wishlist.wishlist.filter(
                      (items) => items._id === this.props.data._id
                    ),
                  });
                }, 2000);
              }}
            />
          )}
          <div className={styles.CardImageHover}>
            <div className={styles.CardButtons}>
              {this.props.data.options.length > 0 ? (
                <Link
                  className={styles.BuyNowButton}
                  Component={Button}
                  to={"/product/" + this.props.data._id}
                >
                  VIEW DETAILS
                </Link>
              ) : (
                <React.Fragment>
                  <Link
                    className={styles.BuyNowButton}
                    Component={Button}
                      to={"/cart"}
                      onClick={() => {
                        if (this.state.LoggedInStatus === "signedin") {
                          this.setState({
                            ...this.state,
                            showAddedAlert: true,
                          });
                          this.props.addToCart(this.props.data._id, 1, null);
                          // console.log("added to cart");
                          setTimeout(() => {
                            this.setState({
                              ...this.state,
                              showAddedAlert: false,
                              inCart: this.props.cart.cart.filter(
                                (items) =>
                                  items.product._id === this.props.data._id
                              ),
                            });
                          }, 2000);
                        } else {
                          this.setState({
                            ...this.state,
                            showLoginAlert: true,
                          });
                          // console.log("added to cart");
                          setTimeout(() => {
                            this.setState({
                              ...this.state,
                              showLoginAlert: false,
                            });
                          }, 2000);
                          
                          
                        }
                      }}
                  >
                    BUY NOW
                  </Link>
                  {this.state.inCart.length === 0 ? (
                    <Button
                      className={styles.AddToCardButton}
                      onClick={() => {
                        if (this.state.LoggedInStatus === "signedin") {
                          this.setState({
                            ...this.state,
                            // showAddedAlert: true,
                          });
                          this.props.addToCart(this.props.data._id, 1, null);
                          // console.log("added to cart");
                          setTimeout(() => {
                            this.setState({
                              ...this.state,
                              showAddedAlert: false,
                              inCart: this.props.cart.cart.filter(
                                (items) =>
                                  items.product._id === this.props.data._id
                              ),
                            });
                          }, 2000);
                        } else {
                          this.setState({
                            ...this.state,
                            showLoginAlert: true,
                          });
                          // console.log("added to cart");
                          setTimeout(() => {
                            this.setState({
                              ...this.state,
                              showLoginAlert: false,
                            });
                          }, 2000);
                          
                          
                        }   
                      }}
                    >
                      ADD TO CART
                    </Button>
                  ) : (
                    <Button
                      className={styles.BuyNowButton}
                      onClick={() => {
                        this.setState({
                          ...this.state,
                          // showRemovedAlert: true,
                        });
                        this.props.deleteCart(this.props.data._id);
                        // console.log("removed from cart");
                        setTimeout(() => {
                          this.setState({
                            ...this.state,
                            showRemovedAlert: false,
                            inCart: this.props.cart.cart.filter(
                              (items) =>
                                items.product._id === this.props.data._id
                            ),
                          });
                        }, 2000);
                      }}
                    >
                      REMOVE
                    </Button>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        <div className={styles.CardText}>
          <div className={styles.CategoryName}>
            {" "}
            {this.props.data.categories
              ? this.props.data.categories.map((category, key) => {
                  return <span key={key}>{category.name},</span>;
                })
              : ""}
          </div>
          <div className={styles.ProductName}>{this.props.data.name} </div>
          <div className={styles.ProductDesc}>
            {this.props.data.shortDescription}
          </div>
          <div>
            <div className={styles.Discount}>
              {this.props.data.specialPrice
                ? Math.round(
                    ((this.props.data.price -
                      this.props.data.specialPrice?.toString()) *
                      100) /
                      this.props.data.price
                  )
                : 0}
              % OFF
            </div>
            <div className={styles.Price}>
              Rs.{" "}
              {this.props.data.specialPrice
                ? this.props.data.specialPriceType === "Fixed"
                  ? this.props.data.specialPrice
                  : Math.round(
                      this.props.data.price.toString() -
                        (this.props.data.specialPrice.toString() / 100) *
                          this.props.data.price
                    )
                : this.props.data.price}
            </div>
          </div>
        </div>
        {this.state.showAddedAlert ? (
          <Alert severity="success" className={styles.alert}>Added To Cart</Alert>
        ) : null}
        {this.state.showRemovedAlert ? (
          <Alert severity="error" className={styles.alert}>Removed from Cart</Alert>
        ) : null}
        {this.state.addedToWishlistAlert ? (
          <Alert severity="success" className={styles.alert}>Added To Wishlist</Alert>
        ) : null}
        {this.state.removedFromWishlistAlert ? (
          <Alert severity="error" className={styles.alert}>Removed from Wishlist</Alert>
        ) : null}
        {this.state.showLoginAlert ? (
          <Alert severity="error" className={styles.alert}>Please Sign In</Alert>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
  wishlist: state.wishlist,
  user: state.user,
});
export default connect(mapStateToProps, {
  addToCart,
  addToWishlist,
  getUserId,
  deleteWishlist,
  deleteCart,
})(Card);
