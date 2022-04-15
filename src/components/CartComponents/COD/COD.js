import React, { Component } from "react";
import "../NetBank/NetBank.css";
import styles from "../CreditCardDetails/CardDetails.module.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from "../../Loader/Loader";
import { sendOrder } from "../../../Redux/Actions/OrderActions";
export class COD extends Component {
  render() {
    return (
      <div className={styles.CardDetails}>
        {this.props.orderd.loading || this.props.order.loading ? (
          <Loader LoaderInCOD />
        ) : this.props.order.error?.message ? (
          <p>{this.props.order.error.message}</p>
        ) : this.props.order.data ? (
          <p>Order Placed Successfully</p>
        ) : (
          <React.Fragment>
            {" "}
            <p className={styles.CardType}>
              Pay the Order Amount through Cash On Delivery
            </p>
            <Button
              className={styles.PayNowButton}
              onClick={() => {
                // console.log(this.props.orderd.orderDetails);
                this.props.sendOrder({
                  ...this.props.orderd.orderDetails,
                  PaymentMethod: "Cash on Delivery",
                  
                },this.props.orderd.orderDetails.ItemsOrdered,);
              }}
            >
              PAY NOW
            </Button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  orderd: state.order,
  order: state.sendOrder,
});
export default connect(mapStateToProps, { sendOrder })(COD);
