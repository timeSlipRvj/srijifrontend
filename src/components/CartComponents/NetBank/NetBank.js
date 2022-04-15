import React, { Component } from 'react'
import "./NetBank.css"
import styles from "../CreditCardDetails/CardDetails.module.css"
import {Button} from "react-bootstrap"

export class NetBank extends Component {
    render() {
        return (
            <div className={styles.CardDetails}>
                    <p className={styles.CardType}>NET BANKING</p>
                    <div className="banklogosbox">
                        <div className="bankindividual">
                            <input type="radio" name="bank" id="banklogo" value='sbi' ></input>
                            <label htmlFor="sbi"><img id='bankimage1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3B59yTFdif9Ux4ijbkKWXXXZY1fhF3zWbA&usqp=CAU" alt="Reload" /></label>
                        </div>
                        <div className="bankindividual">
                            <input type="radio" name="bank" id="banklogo" value='hdfc' ></input>
                            <label htmlFor="hdfc"><img id='bankimage' src="https://seekvectorlogo.net/wp-content/uploads/2018/12/hdfc-bank-vector-logo.png" alt="Reload" /></label>
                        </div>
                        <div className="bankindividual">
                            <input type="radio" name="bank" id="banklogo" value='icici' ></input>
                            <label htmlFor="icici"><img id='bankimage' src="https://techstory.in/wp-content/uploads/2015/07/icici-bank-ltd-logo.jpg" alt="Reload" /></label>
                        </div>
                        <div className="bankindividual">
                            <input type="radio" name="bank" id="banklogo" value='axis' ></input>
                            <label htmlFor="axis"><img id='bankimage' src="https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg" alt="Reload" /></label>
                        </div>
                </div>
                <Button className={styles.PayNowButton}>PAY NOW</Button>
            </div>
        )
    }
}

export default NetBank;