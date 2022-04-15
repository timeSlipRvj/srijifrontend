import React, { Component } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./LoginPage.module.css"
import Login from "../../components/LoginComponents/Login"
class LoginPage extends Component {
  render() {
    return (
      <div className={styles.SignUpSignInSection}>
        <PageTitle title="Sign In / Up" />    
        <Login/>            
      </div>
    );
  }
}

export default LoginPage;
