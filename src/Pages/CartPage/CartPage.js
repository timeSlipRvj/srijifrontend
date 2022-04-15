import React, { Component } from "react";
import BillingInformation from "../../components/CartComponents/BillingInformation/BillingInfo";
// import CartItems from "../../components/CartComponents/CartItems/CartItem";
import Cart from "../../components/CartComponents/CartItems/Cart";
// import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./CartPage.module.css";
import styles2 from "../../components/PageTitle/PageTitle.module.css";

class CartPage extends Component {
  render() {
    return (
      <div className={styles.CartPage}>
        <div className={styles2.Title}>
          MY CART
      </div>
        {/* <CartPageItems /> */}
        <Cart />
        <BillingInformation />
      </div>
    );
  }
}

export default CartPage;
