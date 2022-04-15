import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import TestImage3 from "../../../images/testimage3.jpg";
import TestImage4 from "../../../images/testimage4.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../api";
import styles from "./Carousel.module.css";
import TestImage8 from "../../../images/testimage8.png";
import TestImage9 from "../../../images/testimage9.png";
class Carousels extends Component {
  render() {
    return (
      <div>
        <Carousel>
          {this.props.data?.Slides.map((item, key) => (
            <Carousel.Item key={key}>
              <img
                className="d-block w-100"
                 id={styles.CarouselImage}
                src={baseUrl + item.Image?.image}
                // src={TestImage8}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>{item.General.Caption1}</h5>
                <p>{item.General.Caption2}</p> 
                <Link to={item.General.CallToActionURL}>
                  <Button className={styles.CallToActionButton}>{item.General.CallToActionText} </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          {!this.props.data ? (
            <React.Fragment>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src={TestImage9}
                  alt="second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src={TestImage9}
                  alt="Second slide"
                />
              </Carousel.Item>
            </React.Fragment>
          ) : undefined}
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
