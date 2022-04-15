/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unreachable */
import React, { Component } from "react";
import styles from "./Address.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addAddress } from "../../../../Redux/Actions/ProfileActions";
import Loader from "../../../Loader/Loader";
// import { Link } from "react-router-dom";
class Address extends Component {
  state = {
    new: false,
    id: "",
    current: {
      AddressLine1: "",
      AddressLine2: "",
      State: "",
      City: "",
      Pin: "",
      Country: "",
    },
    NewAddress: "",
  };
  render() {
    const handleChange = (e) => {
      this.setState({
        ...this.state,
        current: { ...this.state.current, [e.target.name]: e.target.value },
      });
    };
    const makeChange = (e) => {
      if (this.state.new === true) {
        this.props.addAddress([
          ...this.props.user.user.Address,
          this.state.current,
        ]);
      } else {
        let add = this.props.user.user.Address;
        for (var i in add) {
          if (add[i]._id === this.state.id) {
            add[i] = {
              AddressLine1: this.state.current.AddressLine1,
              AddressLine2: this.state.current.AddressLine2,
              State: this.state.current.State,
              City: this.state.current.City,
              Pin: this.state.current.Pin,
              Country: this.state.current.Country,
              _id: this.state.id,
            };
            break; //Stop this loop, we found it!
          }
        }
        this.props.addAddress(add);
      }
    };
    return (
      <div className={styles.Address}>
        <div className={styles.MyAddress}>My Address</div>
        <div className={styles.ListOfAddress}>
          {this.props.user.loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              {" "}
              {this.props.user.user.Address.map((item, key) => (
                <React.Fragment>
                  <div className={styles.AddressLocation} key={key}>
                    <div className={styles.AddressBox}>
                      <AiFillCheckCircle
                        className={styles.AiFillCheckCircleGrey}
                      />
                      <div className={styles.AddressPart}>
                        <div>{item.AddressLine1}</div>
                        <div>{item.AddressLine2}</div>
                        <div>
                          {item.State},{item.City}-{item.Pin},{item.Country}
                        </div>
                      </div>
                    </div>
                    <a
                      className={styles.EditLink}
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          ...this.state,
                          NewAddress: "AddNewAddress",
                          current: item,
                          id: item._id,
                          new: false,
                        });
                      }}
                    >
                      Edit
                    </a>
                  </div>
                </React.Fragment>
              ))}
              {this.state.NewAddress === "" && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button
                    className={styles.SaveButton}
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        NewAddress: "AddNewAddress",
                        new: true,
                      });
                    }}
                  >
                    ADD NEW
                  </Button>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
        {this.state.NewAddress === "AddNewAddress" && (
          <div className={styles.InputAddress}>
            <div className={styles.InputBoxesDiv}>
              <input
                className={styles.InputPersonalInfo}
                type="text"
                name="AddressLine1"
                placeholder="First Line"
                value={this.state.current.AddressLine1}
                onChange={handleChange}
              />
              <input
                className={styles.InputPersonalInfo}
                id={styles.SecondBoxInALine}
                type="text"
                name="AddressLine2"
                placeholder="Second Line"
                value={this.state.current.AddressLine2}
                onChange={handleChange}
              />
            </div>
            <div className={styles.InputBoxesDiv}>
              <input
                className={styles.InputPersonalInfo}
                type="text"
                name="City"
                placeholder="City"
                value={this.state.current.City}
                onChange={handleChange}
              />
              <input
                className={styles.InputPersonalInfo}
                id={styles.SecondBoxInALine}
                type="text"
                name="State"
                placeholder="State"
                value={this.state.current.State}
                onChange={handleChange}
              />
            </div>
            <div className={styles.InputBoxesDiv}>
              <input
                className={styles.InputPersonalInfo}
                type="text"
                name="Pin"
                placeholder="Pin Code"
                value={this.state.current.Pin}
                onChange={handleChange}
              />
              <input
                className={styles.InputPersonalInfo}
                id={styles.SecondBoxInALine}
                type="text"
                name="Country"
                placeholder="Country"
                value={this.state.current.Country}
                onChange={handleChange}
              />
            </div>
            <div className={styles.AddressSaveButton}>
              <Button
                className={styles.CancelButton}
                onClick={() =>
                  this.setState({
                    ...this.state,
                    NewAddress: "",
                    current: {
                      AddressLine1: "",
                      AddressLine2: "",
                      City: "",
                      State: "",
                      Pin: "",
                      Country: "",
                    },
                    id: "",
                  })
                }
              >
                CANCEL
              </Button>
              <Button className={styles.SaveButton} onClick={makeChange}>
                SAVE
              </Button>
            </div>
            <p className={styles.lastLinepersonal}>
              ** All this information will not be shared with anyone. We believe
              in privacy and it shall be given to all our customers.**
            </p>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, { addAddress })(Address);
