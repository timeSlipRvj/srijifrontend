/* eslint-disable no-unreachable */
import React, { Component } from "react";
import Orders from "../ProfileActivity/Orders/Orders";
import PersonalInfo from "../ProfileActivity/PersonalInfo/PersonalInfo";
import styles from "./Profile.module.css";
import TestImage6 from "../../../images/dummyprofileimage.png";
import { FaBox } from "react-icons/fa";
import { RiAccountCircleFill, RiLogoutBoxLine } from "react-icons/ri";
import Wishlist from "../ProfileActivity/Wishlist/Wishlist";
import Address from "../ProfileActivity/Address/Address";
import { connect } from "react-redux";
import { logoutUser } from "../../../Redux/Actions/UserActions";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap"
class Profile extends Component {
  state = {
    DisplayProfileSection: "PersonalInfo",
  };

  render() {
    return (
      <div className={styles.Profile}>
        <div className={styles.ProfileSection}>
          <div className={styles.ProfileName}>
            <img
              className={styles.ProfilePicture}
              src={TestImage6}
              alt="ProfilePicture"
            ></img>
            <span>Hi, </span>
            <span className={styles.UserName}>
              {this.props.user.user["First Name"]}{" "}
              {this.props.user.user["Last Name"]}
            </span>
          </div>
          <div
            className={styles.MyOrders}
            onClick={() => {
              this.setState({
                ...this.state,
                DisplayProfileSection: "Orders",
              });
            }}
          >
            <FaBox />
            <span id={styles.MyOrders}>MY ORDERS</span>
          </div>
          <div className={styles.accountsettings}>
            <div className={styles.AccountSettings}>
              <RiAccountCircleFill className={styles.RiAccountCircleFill} />
              <span id={styles.AccountSettings}>ACCOUNT SETTINGS</span>
            </div>

            <ul className={styles.AccountSettingsOptions}>
              <li>
                <span
                  className={styles.aSettings}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      DisplayProfileSection: "PersonalInfo",
                    });
                  }}
                >
                  Personal Information
                </span>
              </li>
              <li>
                <span
                  className={styles.aSettings}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      DisplayProfileSection: "Address",
                    });
                  }}
                >
                  My Address
                </span>
              </li>
              <li>
                <span
                  className={styles.aSettings}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      DisplayProfileSection: "Wishlist",
                    });
                  }}
                >
                  My Favourites
                </span>
              </li>
            </ul>
          </div>
          {
            <div className={styles.ResponsiveAccountSettings}>
            <Dropdown>
              <Dropdown.Toggle className={styles.ResponsiveAccountSettingsButton}>
              <div className={styles.AccountSettings}>
              <RiAccountCircleFill className={styles.RiAccountCircleFill} />
              <span id={styles.AccountSettings}>ACCOUNT SETTINGS</span>
            </div>

              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className={styles.aSettings}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      DisplayProfileSection: "PersonalInfo",
                    });
                  }}>Personal Information</Dropdown.Item>
                <Dropdown.Item  className={styles.aSettings}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      DisplayProfileSection: "Address",
                    });
                  }}>My Address</Dropdown.Item>
                <Dropdown.Item  className={styles.aSettings}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      DisplayProfileSection: "Wishlist",
                    });
                  }}>My Favorites</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          }
          <div className={styles.LogOut}>
            <Link to="/" onClick={() => this.props.logoutUser()}>
              <RiLogoutBoxLine className={styles.RiLogoutBoxLine} />
              <span id={styles.LogOut}>LOGOUT</span>
            </Link>
          </div>
        </div>
        <div className={styles.ScrollingPartProfile}>
          {this.props.user.loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              {" "}
              {this.state.DisplayProfileSection === "PersonalInfo" && (
                <PersonalInfo />
              )}
              {this.state.DisplayProfileSection === "Orders" && <Orders />}
              {this.state.DisplayProfileSection === "Address" && <Address />}
              {this.state.DisplayProfileSection === "Wishlist" && <Wishlist />}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, { logoutUser })(Profile);
