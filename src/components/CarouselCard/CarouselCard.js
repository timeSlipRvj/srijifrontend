import React, { Component } from "react";
import styles from "./CarouselCard.module.css";
import Button from 'react-bootstrap/Button'
// import Carousels from "./Carousel/Carousel";
import { Link } from "react-router-dom";
import Carousels2 from "./Carousel/Carousel2";

class CarouselCard extends Component {
    render() {
        return (
            <div className={this.props.slide ? styles.CarouselCardSliding : styles.CarouselCard}>
                <Link to= "/gaushalapage">
                <Carousels2/>
                <div className={styles.CarouselContent}>
                    <div className={styles.CarouselHead}>GAUSHALA</div>
                    <div className={styles.CarouselName}>
                        THE NAME OF THE GAUSHALA, LOCATION
                        <div className={styles.CarouselButton}>
                        <Link to= "/gaushalapage"><Button variant="outline-warning" className={styles.KnowMoreButton}>KNOW MORE</Button></Link>
                            <Button variant="warning" className={styles.DonateNowButton}>DONATE NOW</Button>
                        </div>
                    </div>
                    <div className={styles.CarouselDesc}>
                        <p>                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut 
                        </p>

                    </div>
                </div>
                </Link>
            </div>
        )
    }
}

export default CarouselCard;