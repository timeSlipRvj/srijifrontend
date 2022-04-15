import React, { Component } from "react";
import styles from "./QueryComponents.module.css"
import {Button} from "react-bootstrap"
// import { applyStyles } from "@popperjs/core";

class QueryComponent extends Component {
    render() {
        return (
          <div className={styles.QueryComponent}>
            <p>
              Loving our products or have a question to ask , write to us and we
              will revert in less than 24 hours. We accept all kinds of
              questions and customer reviews.You can also write a mail to the
              given email addresses separately.
            </p>
            <div className={styles.QueryDetails}>
              <div className={styles.QueryInput}>
                <p>Fill in the details</p>
                <form>
                  <input
                    className={styles.InputCardDetails}
                    placeholder="Full Name"
                    type="text"
                    name="FullName"
                  ></input>
                  <input
                    className={styles.InputCardDetails}
                    placeholder="Email"
                    type="email"
                    name="Email"
                  ></input>
                  <input
                    className={styles.InputCardDetails}
                    placeholder="Order Number"
                    type="text"
                    name="OrderNumber"
                  ></input>
                  <input
                    className={styles.InputCardDetails}
                    placeholder="Country"
                    type="Country"
                    name="Country"
                  ></input>
                  <input
                    className={styles.InputCardDetails}
                    placeholder="Subject"
                    type="Subject"
                    name="Subject"
                  ></input>
                  <textarea
                    className={styles.InputCardDetails}
                    id={styles.QueryInputSection}
                    placeholder="Enter Your Query here"
                    rows="4"
                    cols="50"
                    name="comment"
                  />
                  <Button className={styles.SendButton}>SEND</Button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default QueryComponent;
