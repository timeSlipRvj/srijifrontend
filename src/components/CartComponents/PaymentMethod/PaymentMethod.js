/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import styles from "./PaymentMethod.module.css";
import { BsCircleFill } from "react-icons/bs";
import CardDetails from "../CardDetails/CardDetails";
import DebitCardDetails from "../DebitCardDetails/DebitCardDetails";
import CreditCardDetails from "../CreditCardDetails/CreditCardDetails";
import { Link } from "react-router-dom";
import NetBank from "../NetBank/NetBank";
import COD from "../COD/COD";
import { Dropdown } from "react-bootstrap";

class PaymentMethod extends Component {
  state = {
    PaymentMethod: "COD",
  };
  render() {
    return (
      <div className={styles.PaymentMethod}>
        <div className={styles.PaymentMethodBox}>
          <div className={styles.PaymentMethodBoxHeading}>
            03. PAYMENT METHOD
          </div>
          <div className={styles.PaymentMethodCard}>
            <div className={styles.PaymentWays}>
              {
                <Dropdown className={styles.DropdownOfCards}>
                  <Dropdown.Toggle className={styles.Drop}>
                    PAY THROUGH
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.DropdownMenuOfCards}>
                    <Dropdown.Item className={styles.DropdownItemofCards}>
                      <div
                        className={styles.CardsResponsive}
                        onClick={() => {
                          this.setState({
                            ...this.state,
                            PaymentMethod: "CreditCard",
                          });
                        }}
                        id={
                          this.state.PaymentMethod === "CreditCard" &&
                          styles.Selected
                        }
                      >
                        <BsCircleFill className={styles.BsCircleFill} /> CREDIT
                        CARD
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.DropdownItemofCards}>
                      <div
                        className={styles.CardsResponsive}
                        onClick={() => {
                          this.setState({
                            ...this.state,
                            PaymentMethod: "DebitCard",
                          });
                        }}
                        id={
                          this.state.PaymentMethod === "DebitCard" &&
                          styles.Selected
                        }
                      >
                        <BsCircleFill className={styles.BsCircleFill} /> DEBIT
                        CARD
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.DropdownItemofCards}>
                      <div
                        className={styles.CardsResponsive}
                        onClick={() => {
                          this.setState({
                            ...this.state,
                            PaymentMethod: "NetBank",
                          });
                        }}
                        id={
                          this.state.PaymentMethod === "NetBank" &&
                          styles.Selected
                        }
                      >
                        <BsCircleFill className={styles.BsCircleFill} /> NET
                        BANKING
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.DropdownItemofCards}>
                      <div
                        className={styles.CardsResponsive}
                        onClick={() => {
                          this.setState({
                            ...this.state,
                            PaymentMethod: "COD",
                          });
                        }}
                        id={
                          this.state.PaymentMethod === "COD" && styles.Selected
                        }
                      >
                        <BsCircleFill className={styles.BsCircleFill} /> CASH ON
                        DELIVERY
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              }
              <div
                className={styles.Cards}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    PaymentMethod: "Card",
                  });
                }}
                id={
                  this.state.PaymentMethod === "Card" && styles.Selected
                }
              >
                <BsCircleFill className={styles.BsCircleFill} /> CARD
              </div>
               <div
                className={styles.Cards}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    PaymentMethod: "DebitCard",
                  });
                }}
                id={this.state.PaymentMethod === "DebitCard" && styles.Selected}
              >
                <BsCircleFill className={styles.BsCircleFill} /> DEBIT CARD
              </div>
              <div
                className={styles.Cards}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    PaymentMethod: "NetBank",
                  });
                }}
                id={this.state.PaymentMethod === "NetBank" && styles.Selected}
              >
                <BsCircleFill className={styles.BsCircleFill} /> NET BANKING
              </div>
              <div
                className={styles.Cards}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    PaymentMethod: "COD",
                  });
                }}
                id={this.state.PaymentMethod === "COD" && styles.Selected}
              >
                <BsCircleFill className={styles.BsCircleFill} /> CASH ON
                DELIVERY
              </div>
            </div>
            <div>
              {this.state.PaymentMethod === "CreditCard" && (
                <CreditCardDetails />
              )}
              {this.state.PaymentMethod === "DebitCard" && <DebitCardDetails />}
              {this.state.PaymentMethod === "NetBank" && <NetBank />}
              {this.state.PaymentMethod === "COD" && <COD />}
            </div>
          </div>
        </div>
        <div className={styles.Buyer}>
          <span>
            <Link to="/cart" className={styles.EditButton}>
              EDIT
            </Link>
          </span>
          <PersonalDetails />
        </div>
      </div>
    );
  }
}

export default PaymentMethod;
