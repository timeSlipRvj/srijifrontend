import React, { Component } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import QueryComponent from "../../components/QueryComponents/QueryComponents";

class SendQuery extends Component {
    render() {
        return (
            <div className="SendQuery">
                {/* <Navbar2 /> */}
                <PageTitle title="Send Us Your Query"/>
                <QueryComponent/>
            </div>
        );
    }
}

export default SendQuery;
