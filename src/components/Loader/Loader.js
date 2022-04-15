/* eslint-disable no-unreachable */
import React, { Component } from "react";
import Loader from "react-loader-spinner";

class LoaderScreen extends Component {
    render() {
        const LoaderStyle = {
            height: "300px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems:"center"
        }
        return (
            <Loader style={LoaderStyle} type="BallTriangle" color="#FFB300" height={130} width={130} />
            
        );
    }
}
export default LoaderScreen;