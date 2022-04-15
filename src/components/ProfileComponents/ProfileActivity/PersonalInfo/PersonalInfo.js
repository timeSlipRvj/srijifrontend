/* eslint-disable no-unreachable */
import React, { Component } from "react";
import styles from "./PersonalInfo.module.css";
import TestImage5 from "../../../../images/dummyprofileimage.png";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { changeDetails } from "../../../../Redux/Actions/ProfileActions";

class PersonalInfo extends Component {
  state = {
    allowEdit: false,
    data: { "First Name": "", "Last Name": "", Email: "", Phone: "" },
  };
  componentDidMount() {
    this.setState({
      ...this.state,
      data: {
        "First Name": this.props.user.user["First Name"],
        "Last Name": this.props.user.user["Last Name"],
        Email: this.props.user.user["Email"],
        Phone: this.props.user.user["Phone"]
          ? this.props.user.user["Phone"]
          : "",
      },
    });
  }

  render() {
    const handleChange = (e) => {
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          [e.target.name]: e.target.value,
        },
      });
    };
    return (
      <div className={styles.PersonalInfo}>
        <div className={styles.PersonalInformation}>Personal Information</div>
        {this.props.user.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div
              className={styles.ProfileEditButton}
              onClick={() =>
                this.setState({
                  ...this.state,
                  allowEdit: !this.state.allowEdit,
                })
              }
            >
              Edit
            </div>
            <div className={styles.Image}>
              <img
                className={styles.ProfileImage}
                src={TestImage5}
                alt="TestImage"
              />
            </div>
            <div className={styles.inputboxpersonal}>
              <div className="namefulllast">
                <input
                  className={styles.InputPersonalInfo}
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                  value={this.state.data["First Name"]}
                  disabled={!this.state.allowEdit}
                  onChange={handleChange}
                />
                <input
                  className={styles.InputPersonalInfo}
                  id={styles.SecondBoxInALine}
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  value={this.state.data["Last Name"]}
                  disabled={!this.state.allowEdit}
                  onChange={handleChange}
                />
              </div>
              <input
                className={styles.InputPersonalInfo}
                type="email"
                name="Email"
                placeholder="email"
                value={this.state.data.Email}
                disabled={!this.state.allowEdit}
                onChange={handleChange}
              />
              <div>
                <input
                  className={styles.InputPersonalInfo}
                  id={styles.CountryCode}
                  type="text"
                  placeholder="+91"
                />
                <input
                  className={styles.InputPersonalInfo}
                  id={styles.SecondBoxInALine}
                  type="text"
                  name="Phone"
                  placeholder="phoneNo"
                  value={this.state.data.Phone}
                  disabled={!this.state.allowEdit}
                  onChange={handleChange}
                />
              </div>
              {this.state.allowEdit ? (
                  <Button
                    className={styles.SaveDetailsButton}
                  onClick={() => this.props.changeDetails(this.state.data)}
                >
                  SAVE DETAILS
                </Button>
              ) : undefined}
            </div>
            <p className={styles.lastLinepersonal}>
              ** All this information will not be shared with anyone. We believe
              in privacy and it shall be given to all our customers.**
            </p>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps, { changeDetails })(PersonalInfo);
