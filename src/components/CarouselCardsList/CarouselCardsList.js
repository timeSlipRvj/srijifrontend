import React, { Component } from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import styles from "./CarouselCardsList.module.css";

class CarouselCardsList extends Component {
   render(){ return (
    <div>
            <div className={styles.CarouselCardsList}>
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            </div>
    </div>
    )
    }
}

export default CarouselCardsList;