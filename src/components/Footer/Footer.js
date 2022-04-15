/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import ContactUs from "../ContactUs/ContactUs";
import Tagline from "../Tagline/Tagline";
import styles from "./Footer.module.css";

import Subscribe from "./Subscribe/Subscribe";
import AboutUs from "./AboutUs/AboutUs";
import Copyright from "../Copyright/Copyright";
import { SiFacebook, SiYoutube } from "react-icons/si";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { getFooterDetails } from "../../Redux/Actions/StorefrontActions";
import { connect } from "react-redux";
import { baseUrl } from "../../api";
import { Link } from "react-router-dom";
class Footer extends Component {
  componentDidMount() {
    this.props.getFooterDetails();
  }
  render() {
    const { loading, footerData } = this.props.footerDetails;
    // console.log(footerData);
    if (loading === false && !this.props.footerDetails.error) {
      // console.log(footerData.Footer.FooterCopyrightText);
    }

    return (
      <div className={styles.Footer}>
        {console.log(this.props)}
        <div className={styles.FooterContent}>
          <div className={styles.SectionA}>
            <img
              className={styles.LogoImageInFooter}
              src={baseUrl + this.props.logos?.logos?.HeaderLogo?.image}
              alt="Logo Image"
            />
            <Tagline className={styles.TaglineInFooter} />
            <ContactUs
              data={this.props.menus.menus?.Menus?.FooterMenuOne.menuItems}
            />
          </div>
          <div className={styles.SectionB}>
            <Subscribe />
          </div>
          <div className={styles.SectionC}>

            <div className={styles.AbtusTnc}>
              <AboutUs data={this.props.menus.menus?.Menus?.FooterMenuTwo.menuItems} />
              </div>

            <div className={styles.SocialMediaIcon}>
              {console.log(this.props.socials?.links)}
              {this.props.socials?.links["Facebook"] !== "#" &&
                this.props.socials?.links["Facebook"] !== "" && (
                  <Link
                    to={{ pathname: this.props.socials?.links["Facebook"] }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiFacebook className={styles.Facebook} />
                  </Link>
                )}
              {this.props.socials?.links["Twitter"] !== "#" &&
                this.props.socials?.links["Twitter"] !== "" && (
                  <Link
                    to={{ pathname: this.props.socials?.links["Twitter"] }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiTwitter className={styles.Facebook} />
                  </Link>
                )}
              {this.props.socials?.links["Instagram"] !== "#" &&
                this.props.socials?.links["Instagram"] !== "" && (
                  <Link
                    to={{ pathname: this.props.socials?.links["Instagram"] }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiInstagram className={styles.Facebook} />
                  </Link>
                )}
                 {this.props.socials?.links["Youtube"] !== "#" &&
                this.props.socials?.links["Youtube"] !== "" && (
                  <Link
                    to={{ pathname: this.props.socials?.links["Youtube"] }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiYoutube className={styles.Facebook} />
                  </Link>
                )}
              {/* <FiInstagram className={styles.Instagram} />
              <SiFacebook className={styles.Facebook} /> */}
            </div>
          </div>
        </div>
        <Copyright
          text={this.props.footerDetails.footerData.Footer?.FooterCopyrightText}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  footerDetails: state.footer,
  logos: state.logos,
  menus: state.menus,
  general: state.general,
  socials: state.socials,
});
export default connect(mapStateToProps, { getFooterDetails })(Footer);
