import "./BillingInfo.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../../api";
import { saveOrderDetails } from "../../../Redux/Actions/OrderActions";
import Loader from "../../Loader/Loader";
import { Link, Redirect } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

export class Billinginfo extends Component {
  state = {
    total: 0,
    shipping: 200,
    transport: 100,
    mrp: 0,

    Address: {
      AddressLine1: "",
      AddressLine2: "",
      Country: "",
      State: "",
      City: "",
      Pin: "",
    },
    Receiver: {
      FullName: "",
      Phone: "",
      Email: "",
    },
    sendData: {
      Phone: "",
      Email: "",
      Receiver: "",
      Status: "Pending Payment",
      Address: {
        BillingAddress: {},
        ShippingAddress: {},
      },
      ShippingPrice: 0,
      Discount: 0,
      totalAmount: 0,
    },
    selected: -1,
    selectedAddress: {
      AddressLine1: "",
      AddressLine2: "",
      Country: "",
      State: "",
      City: "",
      Pin: "",
    },
    coupon: "",
    shippingMethods: {
      FreeShipping: {},
      LocalPickup: {},
      FlatRate: {},
    },
    redirect: false,
    showLoginAlert: false,
  };

  componentDidMount() {
    if (this.props.cart.cart.length > 0) {
      let current = 0,
        m = 0;
      // eslint-disable-next-line array-callback-return
      this.props.cart.cart.map((item, key) => {
        current += item.product.specialPrice * item.qty;
        m += item.product.price * item.qty;
      });
      this.setState({ ...this.state, total: current, mrp: m });
    }
  }
  componentWillReceiveProps() {
    if (this.props.cart.cart.length > 0) {
      let current = 0,
        m = 0;
      // eslint-disable-next-line array-callback-return
      this.props.cart.cart.map((item, key) => {
        current += item.product.specialPrice * item.qty;
        m += item.product.price * item.qty;
      });
      this.setState({ ...this.state, total: current, mrp: m });
    }
  }

  checkCouponSingle = (code, productId) => {
    api
      .post("/coupon/valid", { code, productId })
      .then((res) => {
        // console.log(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        // console.log(err);
        return "invalid";
      });
  };

  render() {
    // console.log(this.state);
    const checkCouponAll = () => {
      this.props.cart.cart.forEach((item) => {
        let coupon = this.checkCouponSingle(
          this.state.coupon,
          item.product._id
        );
        // console.log(coupon);
        if (coupon !== "invalid") {
          // console.log("valid!");
        } else {
          window.alert("Invalid Coupon");
          // this.setState({...this.state,this.state.sendData.coupon:""})
        }
      });
    };

    const handleRecieverchange = (e) => {
      this.setState({
        ...this.state,
        Receiver: { ...this.state.Receiver, [e.target.name]: e.target.value },
      });
    };
    const handleAddresschange = (e) => {
      this.setState({
        ...this.state,
        selected: "address",
        Address: { ...this.state.Address, [e.target.name]: e.target.value },
      });
    };
    const handleSubmit = (e) => {
      if (
        this.state.Receiver.Email === "" ||
        this.state.Receiver.FullName === "" ||
        this.state.Receiver.Phone === "" ||
        (this.state.selected === -1 &&
          (this.state.Address.AddressLine1 === "" ||
            this.state.Address.AddressLine2 === "" ||
            this.state.Address.City === "" ||
            this.state.Address.State === "" ||
            this.state.Address.Pin === "" ||
            this.state.Address.Country === ""))
      ) {
        window.alert("Invalid Details please fill all fields");
      } else {
        const cal = () => {
          let ans = 0;
          this.props.cart.cart.map((item) => (ans += item.totalPrice));
          return ans + this.state.shipping + this.state.transport;
        };
        let a = cal();
        let arr = [];
        this.props.cart.cart.forEach((item) => {
          arr.push({
            ProductId: item.product._id,
            Quantity: item.qty,
            StockId: item.stock ? item.stock._id : null,
          });
        });
        let add =
          this.state.selected === "address"
            ? this.state.Address
            : this.state.selectedAddress;
        this.setState({
          sendData: {
            Address: {
              BillingAddress:
                this.state.selected === "address"
                  ? this.state.Address
                  : this.state.selectedAddress,
              ShippingAddress:
                this.state.selected === "address"
                  ? this.state.Address
                  : this.state.selectedAddress,
            },
            Phone: this.state.Receiver.Phone,
            Name: this.state.Receiver.FullName,
            Email: this.state.Receiver.Email,
            ShippingPrice: this.state.transport + this.state.shipping,
            Status: "Pending Payment",
            totalAmount: a,
            PaymentMethod: "",
          },
        });
        // console.log(add);
        if (this.props.cart.cart.length > 0) {
          this.props.saveOrderDetails({
            Phone: this.state.Receiver.Phone,
            Receiver: this.state.Receiver.FullName,
            Email: this.state.Receiver.Email,
            Status: "Pending",
            ShippingMethod: "Free Shipping",
            totalAmount: a,
            Address: {
              BillingAddress: {
                Name: this.state.Receiver.FullName,
                AddressLine1: add.AddressLine1,
                AddressLine2: add.AddressLine2,
                Country: add.Country,
                City: add.City,
                State: add.State,
                Pin: add.Pin,
              },

              ShippingAddress: {
                Name: this.state.Receiver.FullName,
                AddressLine1: add.AddressLine1,
                AddressLine2: add.AddressLine2,
                Country: add.Country,
                City: add.City,
                State: add.State,
                Pin: add.Pin,
              },
            },
            ShippingPrice: this.state.transport + this.state.shipping,
            Discount: this.state.mrp - this.state.total,
            ItemsOrdered: arr,
          });
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
          }, 3000);
        }

        this.setState({ redirect: true });
      }
    };
    if (this.state.redirect) {
      return <Redirect to="/payment" />;
    } else {
      return (
        <div className="billinginfobox">
          <div className="total_head_no">
            <p>02.</p>
            <p>BILLING INFORMATION</p>
          </div>
          <div className="details_billing">
            <div className="detail_add_billing">
              <div className="first_bill_box">
                <p className="head_bill_reciever">Receiver details</p>
                <input
                  className="input_box"
                  type="text"
                  placeholder="Full Name"
                  name="FullName"
                  value={this.state.Receiver.FullName}
                  onChange={handleRecieverchange}
                />
                <input
                  className="input_box"
                  type="text"
                  placeholder="Phone Number"
                  name="Phone"
                  value={this.state.Receiver.Phone}
                  onChange={handleRecieverchange}
                />
                <input
                  className="input_box"
                  type="text"
                  placeholder="Email Address"
                  name="Email"
                  value={this.state.Receiver.Email}
                  onChange={handleRecieverchange}
                />
                {/* <p className="check_box">
                  <label className="containerCheck">
                    I want to get offers in my mail
                    <input
                      type="checkbox"
                      name="newsletter"
                      value={0}
                      onChange={(e) =>
                        this.setState({
                          ...this.state,
                          newsletter: !e.target.value,
                        })
                      }
                    ></input>
                    <span className="checkMark"></span>
                  </label>
                </p> */}
                {/* <p className="check_box">
                  <label className="containerCheck">
                    Save this information for future
                    <input type="checkbox"></input>
                    <span className="checkMark"></span>
                  </label>
                </p> */}
              </div>
              <div className="second_bill_box">
                <p className="head_bill_reciever">Receiver address</p>
                <div className="insidebox_secondbill">
                  <input
                    className="second_input_box"
                    type="text"
                    placeholder="Address (First Line)"
                    name="AddressLine1"
                    value={this.state.Address.AddressLine1}
                    onChange={handleAddresschange}
                  />
                  <div className="dropdown_box">
                    <div className="countrybox_edit">
                      <select
                        name="country"
                        id="country_name"
                        onChange={(e) =>
                          this.setState({
                            ...this.state,
                            Address: {
                              ...this.state.Address,
                              Country: e.target.value,
                            },
                          })
                        }
                      >
                        <option id="select_option" disabled selected hidden>
                          Country
                        </option>
                        <option value="canada">Canada</option>
                        <option value="india">India</option>
                        <option value="unitedstates">United States</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="insidebox_secondbill">
                  <input
                    className="second_input_box"
                    type="text"
                    placeholder="Address (SecondLine)"
                    name="AddressLine2"
                    value={this.state.Address.AddressLine2}
                    onChange={handleAddresschange}
                  />

                  <div className="dropdown_box">
                    <div className="countrybox_edit">
                      <select
                        name="country"
                        id="country_name"
                        onChange={(e) =>
                          this.setState({
                            ...this.state,
                            Address: {
                              ...this.state.Address,
                              State: e.target.value,
                            },
                          })
                        }
                      >
                        <option
                          id="select_option"
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          State
                        </option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">
                          Dadar and Nagar Haveli
                        </option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="insidebox_secondbill">
                  {/* <input
                    className="second_input_box"
                    type="text"
                    placeholder="Address (Third Line)"
                    name="AddressLine3"
                    value={this.state.Address.AddressLine1}
                    onChange={handleAddresschange}
                  /> */}
                  <input
                    className="second_input_box"
                    type="text"
                    placeholder="City"
                    name="City"
                    value={this.state.Address.City}
                    onChange={handleAddresschange}
                  />
                  <input
                    className="second_input_box"
                    type="text"
                    placeholder="Pin code"
                    name="Pin"
                    value={this.state.Address.Pin}
                    onChange={handleAddresschange}
                  />
                </div>
                {/* <div className="insidebox_secondbill"> */}
                  
                  {/* <input
                    className="second_input_box"
                    type="text"
                    placeholder="Landmark"
                    name="Landmark"
                    value={this.state.Address.Landmark}
                    onChange={handleAddresschange}
                  /> */}
                {/* </div> */}
                <div className="finaladdress">
                  <p>{this.state.Address.AddressLine1}</p>
                  <p>{this.state.Address.AddressLine2}</p>
                  <p>
                    {this.state.Address.Country},{this.state.Address.City}-
                    {this.state.Address.Pin}
                  </p>
                </div>
                <p className="check_box">
                  {/* <label className="containerCheck">
                    Set this as my default address
                    <input type="checkbox"></input>
                    <span className="checkMark"></span>
                  </label> */}
                </p>
                <div className="PrevAddress">Or Choose from below</div>
                {this.props.user.user.Address.map((address, key) => (
                  <div className="form-check" key={key}>
                    <input
                      className="form-check-input colorradio"
                      type="radio"
                      name="flexRadioDefault"
                      id={"flexRadioDefault1" + key}
                      checked={this.state.selected === key ? true : false}
                      onChange={(e) => {
                        // console.log(address, key);
                        this.setState({
                          selectedAddress: address,
                          selected: key,
                          // address.
                          Address: {
                            AddressLine1: address.AddressLine1,
                            AddressLine2: address.AddressLine2,
                            Country: address.Country,
                            State: address.State,
                            City: address.City,
                            Pin: address.Pin,
                          },
                        });
                      }}
                    />
                    <label
                      className="form-check-label fontP"
                      htmlFor={"flexRadioDefault1" + key}
                    >
                      {address.AddressLine1 +
                        ", " +
                        address.AddressLine2 +
                        ", " +
                        address.City +
                        ", " +
                        address.State +
                        ", " +
                        address.Country +
                        "- " +
                        address.Pin}
                    </label>
                  </div>
                ))}
                <Link
                  to={
                    this.props.cart.cart.length === 0 ||
                    this.state.Receiver.Email === "" ||
                    this.state.Receiver.FullName === "" ||
                    this.state.Receiver.Phone === "" ||
                    (this.state.selected === -1 &&
                      (this.state.Address.AddressLine1 === "" ||
                        this.state.Address.AddressLine2 === "" ||
                        this.state.Address.City === "" ||
                        this.state.Address.State === "" ||
                        this.state.Address.Pin === "" ||
                        this.state.Address.Country === ""))
                      ? "/cart"
                      : "/payment"
                  }
                >
                  <button className="save_cont_billing" onClick={handleSubmit}>
                    Save & Continue
                  </button>
                </Link>
                {this.state.showLoginAlert ? (
                  <Alert severity="error" className={"alert"}>
                    Please Sign In
                  </Alert>
                ) : null}
              </div>
              <div className="third_bill_box">
                {this.props.cart.loading ? (
                  <Loader />
                ) : (
                  <React.Fragment>
                    {" "}
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Subtotal</p>
                      <p className="para2_insidethird">
                        {/* {() => console.log(calculateSub(this.props.cart))} */}
                        {(() => {
                          let ans = 0;
                          this.props.cart.cart.map(
                            (item) => (ans += item.totalPrice)
                          );
                          return ans;
                        })()}
                      </p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Shipping Cost</p>
                      <p className="para2_insidethird">
                        Rs. {this.state.shipping}
                      </p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Transportation Cost</p>
                      <p className="para2_insidethird">
                        Rs.{this.state.transport}
                      </p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Your Savings</p>
                      <p
                        className="para2_insidethird"
                        style={{ color: "#FFB300" }}
                      >
                        {this.state.mrp - this.state.total}
                      </p>
                    </div>
                    <div className="discountbox">
                      <input
                        type="text"
                        className="discountcode"
                        placeholder="Discount Code"
                        onChnage={(e) =>
                          this.setState({
                            ...this.state,
                            coupon: e.target.value,
                          })
                        }
                      />
                      <p className="applycode" onClick={checkCouponAll}>
                        Apply
                      </p>
                    </div>
                    <div className="inside_box_third">
                      <p className="para1_insidethird">Discount</p>
                      <p className="para2_insidethird">Rs. 0</p>
                    </div>
                    <hr id="bill_line" />
                    <div className="inside_box_third">
                      <p
                        className="para1_insidethird"
                        style={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        GRAND TOTAL
                      </p>
                      <p
                        className="para2_insidethird"
                        style={{ fontWeight: "bold" }}
                      >
                        Rs.{" "}
                        {(() => {
                          let ans = 0;
                          this.props.cart.cart.map(
                            (item) => (ans += item.totalPrice)
                          );
                          return (
                            ans + this.state.shipping + this.state.transport
                          );
                        })()}
                      </p>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({ cart: state.cart, user: state.user });
export default connect(mapStateToProps, { saveOrderDetails })(Billinginfo);
