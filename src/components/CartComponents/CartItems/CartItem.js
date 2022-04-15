import React, { Component } from "react";
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline, IoCloseCircleSharp } from "react-icons/io5";
// import TestImage1 from "../../../images/testimage1.jpg";
import { connect } from "react-redux";
import { updateCartQty, deleteCart } from "../../../Redux/Actions/CartActions";
import Loader from "../../Loader/Loader";
import { getUserId } from "../../../Redux/Actions/UserActions";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../api";
class CartItem extends Component {
  state = { total: 0 };

  render() {
    // console.log(this.props, this.state)
    return (
      <div className="tble_box">
        <div className="scroll_x_box">
          <table className="col_names">
            <tbody>
              {" "}
              {this.props.cart.cart.length > 0 ? (
                <tr className="table_heading">
                  <td className="product_image">
                    <span className="Image_not_Responsive">PRODUCT IMAGE</span>
                    <span className="Image_Responsive">IMAGE</span>
                  </td>
                  <td className="product_Name">PRODUCT NAME</td>
                  <td className="product_avail">AVAILABILITY</td>
                  <td className="product_code">
                    <span className="Code_not_Responsive">PRODUCT CODE</span>
                    <span className="Code_Responsive">CODE</span>
                  </td>
                  <td className="product_price">UNIT PRICE</td>
                  <td className="product_quantity">QUANTITY</td>
                  <td className="product_subtotal">SUBTOTAL</td>
                </tr>
              ) : null}
              {this.props.cart.loading ? <Loader/> : (
                this.props.cart.cart.length > 0 ? (
                this.props.cart.cart.map((item, key) => (
                  <tr className="table_heading1" key={key}>
                    <td className="product_image1">
                      <img
                        src={baseUrl + item.product?.baseImage?.image}
                        alt="Reload"
                      ></img>
                    </td>
                    <td className="product_Name1">
                      <p className="product_para_1">{item.product.name}</p>
                      <p className="product_para_2">
                        Tags : {item.product.tags.map((t, k) => t.name + " ")}
                      </p>
                      <p className="product_para_3">
                        <Link to={"/product/" + item.product._id}>
                          View Details
                        </Link>
                      </p>
                    </td>
                    <td className="product_avail1">Available</td>
                    <td className="product_code1">{item.product.ID}</td>
                    <td className="product_price1">
                      Rs. {item.product.specialPrice}
                    </td>
                    <td className="product_quantity1">
                      <FiMinusCircle
                        id="minus_icon"
                        onClick={() => {
                          if (item.qty === 1) {
                            this.props.deleteCart(
                              item.product._id,
                              item.stock ? item.stock : null
                            );
                          } else {
                            this.props.updateCartQty(
                              item.product._id,
                              item.qty - 1,
                              item.stock ? item.stock : null
                            );
                          }
                        }}
                      ></FiMinusCircle>
                      <p className="product_quant_para">{item.qty}</p>
                      <IoAddCircleOutline
                        id="add_icon"
                        onClick={() => {
                          this.props.updateCartQty(
                            item.product._id,
                            item.qty + 1,
                            item.stock ? item.stock : null
                          );
                        }}
                      />
                    </td>
                    <td className="product_subtotal1">
                      <p className="product__sub_para">
                        Rs . {item.totalPrice}
                      </p>
                      <IoCloseCircleSharp
                        id="closeIcon"
                        onClick={() => {
                          this.props.deleteCart(item.product._id, item.stock ? item.stock._id : null);
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : ( this.props.cart.cart.length === 0 ? 
                <div className="EmptyCartMessage">CART IS EMPTY</div> :
                  null
              ))}
            </tbody>
          </table>
        </div>
        <div className="button_box_1">
          <Link to="/">
            <button id="continue_shopping"> Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ cart: state.cart });
export default connect(mapStateToProps, {
  updateCartQty,
  deleteCart,
  getUserId,
})(CartItem);
