import "./Cart.css";
import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { getCart } from "../../../Redux/Actions/CartActions";
class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    return (
      <div>
        <div className="total_items_cart">
          <div className="total_head_no">
            <p>01.</p>
            <p>TOTAL ITEMS</p>
          </div>
          <CartItem />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { getCart })(Cart);
