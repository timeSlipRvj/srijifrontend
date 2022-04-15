import React, { Component } from "react";
import styles from "./CategoryCard.module.css";
// import TestImage from "../../../images/testimage1.jpg";
import { Button } from "react-bootstrap";
import {baseUrl} from "../../../api";
import { Link } from "react-router-dom";
class CategoryCard extends Component {
  // setMenuLink = (item) => {
  //   let url = "/category/" + item._id;
  //   return url;
  // };
  render() {
    return (
      <div className={styles.CategoryCard}>
        <Link to = "/shop">
        <div className={styles.CardImagePart}>
          <div className={styles.CategoryNameButton}>
            <Button className={styles.CategoryName}>{this.props.title}</Button>
          </div>
          {/* {console.log(baseUrl)} */}
          <img
            className={styles.CardImage}
            src={baseUrl + this.props.source}
            alt=""
          />
          </div>
          </Link>
      </div>
    );
  }
}

export default CategoryCard;
 