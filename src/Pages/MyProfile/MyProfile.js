import React, { Component } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Profile from "../../components/ProfileComponents/Profile/Profile";
import Helmet from "react-helmet";
class MyProfile extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My Profile</title>
        </Helmet>
        <PageTitle title={"My Profile"} />
        <Profile />
      </div>
    );
  }
}

export default MyProfile;
