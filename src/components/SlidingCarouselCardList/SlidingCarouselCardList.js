import React, { Component } from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import styles from "./SlidingCarouselCardList.module.css";

class SlidingCarouselCardsList extends Component {
  render() {
    return (
      <div>
        <div className={styles.SlidingCarouselCardsList}>
          {/* {console.log(this.props.data)} */}

          {
            // eslint-disable-next-line array-callback-return
            this.props.data.Tabs?.map((item) => {
              item.Products.map((pr, key) => (
                <CarouselCard data={pr} key={key} slide />
              ));
            })
          }
          {/* <CarouselCard slide />
          <CarouselCard slide />
          <CarouselCard slide />
          <CarouselCard slide />
          <CarouselCard slide />
          <CarouselCard slide /> */}
        </div>
      </div>
    );
  }
}

export default SlidingCarouselCardsList;
