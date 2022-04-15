/* eslint-disable no-unreachable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../LogoImage/LogoImage";
import Tagline from "../Tagline/Tagline";
import styles from "./Navbar1.module.css"

class Navbar1 extends Component {
    render(){
        return (
            <div className={styles.Navbar_1}>
                    <Link to ="/"><LogoImage data={this.props.logo}/></Link> 
                    {/* <Tagline nvbar /> */}
               
            </div>
        );
    }
}
export default Navbar1;