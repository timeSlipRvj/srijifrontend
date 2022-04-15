import React, { Component } from "react";
import styles from "./PersonalDetails.module.css";
import { connect } from "react-redux";
import Loader from "../../Loader/Loader";
class PersonalDetails extends Component {
  render() {
    return (
      <div className={styles.PersonalDetails}>
        {this.props.order.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className={styles.Name}>
              {this.props.order.orderDetails?.Receiver}
            </div>
            <div className={styles.MailId}>
              {" "}
              {this.props.order.orderDetails?.Email}
            </div>
            <div className={styles.PhoneNumber}>
              {" "}
              {this.props.order.orderDetails?.Phone}
            </div>
            <br></br>
            <div className={styles.Address}>
              {
                this.props.order.orderDetails?.Address?.BillingAddress
                  ?.AddressLine1
              }{" "}
              <br></br>
              {
                this.props.order.orderDetails?.Address?.BillingAddress
                  ?.AddressLine2
              }{" "}
              <br></br>
              {
                this.props.order.orderDetails?.Address?.BillingAddress
                  ?.City
              }
              ,
              {
                this.props.order.orderDetails?.Address?.BillingAddress
                  ?.State
              }
              -
              {
                this.props.order.orderDetails?.Address?.BillingAddress
                  ?.Pin
              }
              ,
              {
                this.props.order.orderDetails?.Address?.BillingAddress
                  ?.Country.toUpperCase()
              }{" "}
              <br></br>
            </div>
            <br></br>
            <div className={styles.PayMoney}>
              PAYMENT OF{" "}
              <span className={styles.Money}>
                Rs. {this.props.order.orderDetails?.totalAmount}
              </span>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ order: state.order });
export default connect(mapStateToProps, {})(PersonalDetails);
