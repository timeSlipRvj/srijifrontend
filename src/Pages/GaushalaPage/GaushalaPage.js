import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import Carousels from "../../components/CarouselCard/Carousel/Carousel";

import GaushalaDetails from "../../components/GaushalaDetails/GaushalaDetails";

import styles from "../CategoryPage/CategoryPage.module.css"
import Carousels2 from "../../components/CarouselCard/Carousel/Carousel2";

class GaushalaPage extends Component {
    render() {
        return (
            <div className="GaushalaPage">
                {/* <Navbar2 /> */}
                <Breadcrumb className={styles.BreadCrumb} >
                    <Breadcrumb.Item  href="#">HOME</Breadcrumb.Item>
                    <Breadcrumb.Item  href="#">GAUSHALA</Breadcrumb.Item>
                    <Breadcrumb.Item active>NAME OF GAUSHALA</Breadcrumb.Item>
                </Breadcrumb>
                <PageTitle/>
                <br></br>
                <Carousels2 />
                <GaushalaDetails/>
              
            </div>
        );
    }
}

export default GaushalaPage;
