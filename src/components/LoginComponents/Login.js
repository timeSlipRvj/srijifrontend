/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "../../Redux/Actions/UserActions";
import { connect } from "react-redux";
import { baseUrl } from "../../api";

class Login extends Component {
  state = {
    LoginDetails: "AlreadyRegistered",
    formData: { fname: "", lname: "", email: "", password: "", repass: "" },
    credentials: { email: "", password: "" },
    error: { message: "" },
  };
  googleLogin = () => {
    window.location.href = baseUrl + "auth/google";
  };

  render() {
    const handleChange = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        formData: { ...this.state.formData, [e.target.name]: e.target.value },
      });
    };
    const handlecreChange = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
        },
      });
    };
    // console.log(this.props);

    const handleSubmit = (e) => {
      if (
        this.state.formData.fname === "" ||
        this.state.formData.email === "" ||
        this.state.formData.password === "" ||
        this.state.formData.repass === ""
      ) {
        this.setState({
          ...this.state,
          error: { message: "please fill all the feilds" },
        });
      }
      if (this.state.formData.password !== this.state.formData.repass) {
        this.setState({
          ...this.state,
          error: { message: "password doesn't match" },
        });
      } else {
        const user = {
          "First Name": this.state.formData.fname,
          "Last Name": this.state.formData.lname,
          Email: this.state.formData.email,
          Password: this.state.formData.password,
          Confirm: this.state.formData.repass,
          Roles: [],
          Permissions: [],
        };
        this.props.registerUser(user);
      }
    };

    return (
      <div className={styles.Login}>
        <div className={styles.LoginColumn}>
          <Button
            className={styles.SignInWithGoogle}
            onClick={(e) => {
              e.preventDefault();
              this.googleLogin();
            }}
          >
            SIGN IN WITH GOOGLE
          </Button>
          {/* <Button className={styles.SignInWithFacebook}>
            SIGN IN WITH FACEBOOK
          </Button> */}

          <div className={styles.OrButton}>
            <hr width="40%" size="8" color="#ffb300"></hr>
            OR
            <hr width="40%" size="8" color="#ffb300"></hr>
          </div>
          {this.state.LoginDetails === "NotRegistered" && (
            <div>
              <form className={styles.NewRegistration}>
                <input
                  className={styles.InputDetails}
                  placeholder="First Name"
                  type="text"
                  name="fname"
                  onChange={handleChange}

                  //   value={this.state.formData.fname}
                ></input>
                <input
                  className={styles.InputDetails}
                  placeholder="Last Name"
                  type="text"
                  name="lname"
                  onChange={handleChange}

                  //   value={this.state.formData.lname}
                ></input>
                <input
                  className={styles.InputDetails}
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  onChange={handleChange}

                  //   value={this.state.formData.email}
                ></input>
                <input
                  className={styles.InputDetails}
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}

                  //   value={this.state.formData.password}
                ></input>
                <input
                  className={styles.InputDetails}
                  placeholder="Re-enter Password"
                  type="password"
                  name="repass"
                  onChange={handleChange}

                  //   value={this.state.formData.repass}
                ></input>
              </form>
              {this.state.formData.password === this.state.formData.repass &&
              this.state.formData.password !== "" &&
              this.state.error.message === "" ? (
                <div className={styles.PasswordMatch}>
                  Password Match Successful
                </div>
              ) : this.state.formData.password !== this.state.formData.repass &&
                this.state.formData.password !== "" &&
                this.state.error.message === "" ? (
                <div className={styles.PasswordDontMatch}>
                  Passwords Don't Match
                </div>
              ) : null}
              <Button
                className={styles.CreateAccountButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSubmit();
                }}
                type="submit"
              >
                CREATE ACCOUNT
              </Button>
              <p className={styles.IsFree}>
                Join us for FREE. Unsubscribe anytime.
                <span
                  className={styles.AlreadyAccount}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      LoginDetails: "AlreadyRegistered",
                    });
                  }}
                >
                  Already have an account?
                </span>
              </p>
            </div>
          )}

          {this.state.LoginDetails === "AlreadyRegistered" && (
            <div>
              <input
                className={styles.InputDetails}
                placeholder="Email Address"
                type="text"
                name="email"
                onChange={handlecreChange}
              ></input>
              <input
                className={styles.InputDetails}
                placeholder="Password"
                type="password"
                name="password"
                onChange={handlecreChange}
              ></input>
              <span className={styles.ForgotPassword}>
                <Link to="#">Forgot Password?</Link>
              </span>
              <div>
                <Link to="/">
                  <Button
                    className={styles.CreateAccountButton}
                    onClick={() => {
                      this.props.loginUser(
                        this.state.credentials.email,
                        this.state.credentials.password
                      );
                    }}
                  >
                    SIGN IN
                  </Button>
                </Link>
              </div>

              <p className={styles.IsFree}>
                Join us for FREE. Unsubscribe anytime.{" "}
                <span
                  className={styles.AlreadyAccount}
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      LoginDetails: "NotRegistered",
                    });
                  }}
                >
                  Don't have an account?
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {
  loginUser,
  registerUser,
})(Login);
