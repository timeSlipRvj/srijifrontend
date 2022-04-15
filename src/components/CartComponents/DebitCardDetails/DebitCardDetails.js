/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "../CreditCardDetails/CardDetails.module.css"


class DebitCardDetails extends Component {
    render() {
        return (
            <div className={styles.CardDetails}>
                <div className={styles.CardType}>DEBIT CARD</div>
                <form className={styles.CardDetailForm}>
                    <input className={styles.InputCardDetails} id={styles.CardNumber} placeholder="CARD NUMBER" type="Number" name="CardNumber"></input>
                    <div className={styles.CardExpiryDetails}>
                        <input className={styles.InputCardDetails} id={styles.ExpiryMonth} placeholder="EXPIRY MONTH" type="Number" name="ExpiryMonth"></input>
                        <input className={styles.InputCardDetails} id={styles.ExpiryYear} placeholder="EXPIRY YEAR" type="Number" name="ExpiryYear"></input>
                    </div>
                    <input className={styles.InputCardDetails} id={styles.cvv} placeholder="CVV" type="Number" name="CVV"></input><span ><div className={styles.CVVcontent}>Last 3 digits on the back side of your card</div></span>
                    <input className={styles.InputCardDetails} id={styles.NameOnCard} placeholder="NAME ON THE CARD" name="NameOnCard" type="Text"></input>
                </form>
                <div className={styles.CardDetailCheckBox}>
                    <input type="checkbox"  name="SavedBankDetails" value="BankDetails"></input>
                    <span className={styles.CardDetailSaveCheckBox} for="Saving Banking Details"> Save the bank details for faster payments ahead</span>
                </div>
                <Button className={styles.PayNowButton}>PAY NOW</Button>

            </div>
        );
    }
}

export default DebitCardDetails;
