/* eslint-disable jsx-a11y/alt-text */
/* eslin1t-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unreachable */
import React, { Component } from "react";
import styles from "./Wishlist.module.css";
import WishlistCard from "./WishlistCard/WishlistCard";
import Loader from "../../../Loader/Loader";
import { connect } from "react-redux";
class Wishlist extends Component {
  render() {
    return (
      <div className={styles.Wishlist}>
        <div className={styles.MyFavorites}>My Favorites</div>
        <div className={styles.FavoriteItems}>
          {this.props.wishlist.loading ? (
            <Loader />
          ) : this.props.wishlist.wishlist.length === 0 ? (
            <div className={styles.NoItems}>NO ITEMS ADDED AS FAVOURITE</div>
          ) : (
            <React.Fragment>
              {this.props.wishlist.wishlist.map((item, key) => (
                <WishlistCard key={key} data={item} no={key} />
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ wishlist: state.wishlist });
export default connect(mapStateToProps, {})(Wishlist);
