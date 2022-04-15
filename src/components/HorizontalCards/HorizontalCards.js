import React, { Component } from "react";
import styles from "./HorizontalCards.module.css";
// import TestImage from "../../images/testimage1.jpg";
import { Button } from "react-bootstrap";
import { baseUrl } from "../../api";
import { Link } from "react-router-dom";

class HorizontalCard extends Component {
  render() {
    return (
      <div className={styles.HorizontalCard}>
        {/* hello */}
        <div className={styles.CardImagePart}>
          <img
            className={styles.CardImage}
            src={baseUrl + this.props.product?.baseImage?.image}
            alt=""
          />
        </div>
        <div className={styles.CardText}>
          <div className={styles.CategoryName}>
            {this.props.product.categories
              ? this.props.product.categories.map((category, key) => {
                  return <span key={key}>{category.name},</span>;
                })
              : ""}
          </div>
          <div className={styles.ProductName}>{this.props.product.name}</div>
          <div className={styles.ProductDesc}>
            {this.props.product.description.slice(0, 100)}
          </div>
          <div>
            <div className={styles.Price}>RS 24000/-</div>
            <div className={styles.Rating}>Avg Rating 4.0</div>
          </div>
          <div className={styles.HorizontalCardButtons}>
            {this.props.data.options.length > 0 ? (
              <Link
                className={styles.BuyNowButton}
                Component={Button}
                to={"/product/" + this.props.data._id}
              >
                VIEW DETAILS
              </Link>
            ) : (
              <React.Fragment>
                <Link
                  className={styles.BuyNowButton}
                  Component={Button}
                  to={"/product/" + this.props.data._id}
                >
                  BUY NOW
                </Link>
                <Button
                  className={styles.AddToCardButton}
                  onClick={() => {
                    this.props.addToCart(this.props.data._id, 1, null);
                  }}
                >
                  ADD TO CART
                </Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalCard;
