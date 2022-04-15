import React, { Component } from "react";
import styles from "./CategoryCardsList.module.css";
import CategoryCard from "./CategoryCards/CategoryCard";

class CategoryCardsList extends Component {
  render() {
    return (
      <div className={styles.CategoryCardList}>
        {this.props.data.map((item, key) => (
          <CategoryCard key={key} title={item.name} source={item.banner?.image} />
        ))}
      </div>
    );
  }
}

export default CategoryCardsList;
