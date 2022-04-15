/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unreachable */
import React, { Component } from "react";
import WishlistCard from "../../components/ProfileComponents/ProfileActivity/Wishlist/WishlistCard/WishlistCard";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import styles2 from "../../components/PageTitle/PageTitle.module.css";
import styles3 from "./Wishlistpage.module.css";
import { getWishlist } from "../../Redux/Actions/WishlistActions";

class WishlistPage extends Component {
  componentDidMount() {
    this.props.getWishlist();
  }
  render() {
    return (
      <div className={styles3.Wishlist}>
        <div className={styles2.Title}>My Favorites</div>
        <div className={styles3.FavoriteItems}>
          {this.props.wishlist.loading ? (
            <Loader />
          ) : this.props.wishlist.wishlist.length === 0 ? (
            <div className={styles3.NoItems}>NO ITEMS ADDED AS FAVOURITE</div>
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
export default connect(mapStateToProps, { getWishlist })(WishlistPage);
