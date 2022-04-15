import React, { Component } from "react";
import HorizontalCard from "../HorizontalCards/HorizontalCards";
import styles from "./HorizontalCardsList.module.css";

class HorizontalCardsList extends Component {
  render() {
    return (
      <div className={styles.HorizontalCardsList}>
        {this.props.data?.forEach((item, key) => {
          return item.Products.map((content, key) => {
            return <HorizontalCard product={content} key={key} />;
          });
        })}
        {/* <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard /> */}
      </div>
    );
  }
}

export default HorizontalCardsList;
