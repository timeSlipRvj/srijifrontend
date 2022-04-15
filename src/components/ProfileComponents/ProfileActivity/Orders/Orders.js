/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React, { Component } from "react";
import styles from "./Orders.module.css";
// import TestImage5 from "../../../../images/testimage5.jpg";
import TestImage3 from "../../../../images/testimage3.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../../../Loader/Loader";
import { getOrder } from "../../../../Redux/Actions/OrderActions";
import { baseUrl } from "../../../../api";
class Orders extends Component {
  componentDidMount() {
    this.props.getOrder();
  }
  render() {
    return (
      <div className={styles.Orders}>
        <div className={styles.MyOrders}>My Orders</div>
        {this.props.orderList.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className={styles.ProductsSection}>
              {this.props.orderList?.data?.map((order, key) => (
                <React.Fragment>
                  {" "}
                  <div className={styles.OrderDetails} key={key}>
                    <span className={styles.DateOfOrder}>
                      {order.createdAt.slice(0, 10)}
                    </span>
                    <span className={styles.OrderStatus}>{order.Status}</span>
                    {/* <a className={styles.ViewDetailsButton} href="#">
                      View Details
                    </a> */}
                  </div>
                  <div className={styles.AllProducts}>
                    <div className={styles.ProductGrid}>
                      {order.ItemsOrdered.map((item, key) => {
                        if (order.ItemsOrdered.length !== 0) {
                          return (
                            <React.Fragment>
                              {" "}
                              <div className={styles.Count} key={key}>{key + 1}</div>
                              <div className={styles.ImagePartOrders}>
                                <img
                                  className={styles.OrderProductImage}
                                  src={baseUrl + item.Product.baseImage?.image}
                                />
                              </div>
                              <div className={styles.ProductDetails}>
                                <div className={styles.ProductName}>
                                 {item.Product.name}
                                </div>
                                <div className={styles.ProductTags}>
                                  {item.Product.tags.map(tag=><span>{tag.name},</span>)}
                                </div>
                                <Link className={styles.ProductLink} to={"/product/"+item.Product._id}>
                                  View Product
                                </Link>
                              </div>
                            </React.Fragment>
                          )
                        } else {
                          return <div>No Items Ordered</div>;
                        }
                      })}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        )}
              </div>
    );
  }
}
const mapStateToProps = (state) => ({ orderList: state.getOrder });
export default connect(mapStateToProps, { getOrder })(Orders);
