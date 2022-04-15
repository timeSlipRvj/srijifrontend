/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import styles from "./Subscribe.module.css";
import {TiTick} from "react-icons/ti"

class Subscribe extends Component {
    state = {
        SubscribingMail: ""
    }
    
    render() {
        return (
            <div className={styles.Subscribe}>
                <div className={styles.SubscribeInput}>
                    <input className={styles.Input} type="email" id="email" name="email" placeholder="Your email-address" />
                    {this.state.SubscribingMail=== "" && <button className={styles.SubscribeInputButton} type="button" onClick={() => {
                          this.setState({
                            ...this.state,
                            SubscribingMail: "Subscribed",
                          });
                        }}>SUBSCRIBE</button>}
                    {this.state.SubscribingMail=== "NotValid" && <button className={styles.SubscribeInputButton} type="button" >SUBSCRIBE</button>}
                    {this.state.SubscribingMail=== "Subscribed" && <span className={styles.SubscribedSpan} onClick={() => {
                          this.setState({
                            ...this.state,
                            SubscribingMail: "",
                          });
                        }} >SUBSCRIBED</span>}
                </div>
                {this.state.SubscribingMail === "" &&
                    <div className={styles.SubscribeDetails}>
                    Subscribe to get daily updates for <span className={styles.Free}>FREE</span>
                </div>}
                {this.state.SubscribingMail === "NotValid" &&
                    <div className={styles.NotAValidMail}>
                    Please enter a valid email id
                </div>}
                {this.state.SubscribingMail === "Subscribed" &&
                    <div className={styles.SubscribedMessage}>
                    <TiTick className={styles.TiTick}/> Don't worry we also hate spamming. Only important message will be sent.
                </div>}
            </div>
        )
    }
}

export default Subscribe;