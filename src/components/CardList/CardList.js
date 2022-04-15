import React, { Component } from "react";
import Card from "./Cards/Card";
import styles from "./CardList.module.css";

class CardList extends Component {
  render() {
    return (
      <div>
        <div className={this.props.slide ? styles.CardListSliding : styles.CardList}>
          {this.props.products?.map((product, key) => (
            <Card data={product} key={key} />
          ))}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    );
  }
}

export default CardList;
