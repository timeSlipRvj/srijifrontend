/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from 'react-bootstrap/Button'
import React, { Component } from "react";
import styles from "./GaushalaDonations.module.css"

class GaushalaDonations extends Component {
    render() {
        return (
            <div className={styles.GaushalaDonations}>
                <div>
                    <Button variant="outline-warning" className={styles.DonationAmount}>DONATE 51/-</Button>
                    <Button variant="outline-warning" className={styles.DonationAmount}>DONATE 501/-</Button>
                    <Button variant="outline-warning" className={styles.DonationAmount}>DONATE 1100/-</Button>
                    <Button variant="outline-warning" className={styles.DonationAmount}><input type="Number" name="Amount" placeholder="ENTER AMOUNT" /> </Button>
                </div>
                <Button variant="warning" className={styles.DonateNowButton}>DONATE NOW</Button>

            </div>
        )
    }
}

export default GaushalaDonations;