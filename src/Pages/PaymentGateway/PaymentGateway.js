import React, { Component } from "react";
import PaymentMethod from "../../components/CartComponents/PaymentMethod/PaymentMethod";
import PageTitle from "../../components/PageTitle/PageTitle";
import { connect } from "react-redux";
import Loader  from "../../components/Loader/Loader";
class PaymentGateway extends Component {
  render() {
    return (
      <div>
        {this.props.order.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <PageTitle title="Payment" />
            <PaymentMethod />
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ order: state.order });
export default connect(mapStateToProps, {})(PaymentGateway);
