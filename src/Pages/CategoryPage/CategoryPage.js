import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import styles from "./CategoryPage.module.css";
import Category from "../../components/Category/Category";
import {
  getCategories,
  getCategoryProducts,
} from "../../Redux/Actions/CategoryActions";
import { Breadcrumb } from "react-bootstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";

class CategoryPage extends Component {
  // state = {
  //     selectedCategory: this.props.categories.filter((category) => )
  // }
  componentDidMount() {
    let url = window.location.href;
    let res = url.split("/")[4];
    // console.log(res);
    this.props.getCategoryProducts(null, 0, 0, null, [
      { name: "categories", value: [this.props.match.params.id] },
    ]);
    this.props.getCategories();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getCategoryProducts(null, 0, 0, null, [
        { name: "categories", value: [this.props.match.params.id] },
      ]);
    }
  }
  render() {
    // console.log(this.props);
    // const getCategory = (id) => {
    //   this.props.categories.filter((category) => {
    //     if (category.childernCategory.length === 0) {
    //       return category._id === id;
    //     } else { }
    //   });
    // };
    // console.log(getCategory(this.props.match.params.id, this.props.categories));
    return (
      <div className="Category">
        <Category />
        <Breadcrumb className={styles.BreadCrumb}>
          <Breadcrumb.Item className={styles.Visited} href="#">
            HOME
          </Breadcrumb.Item>
          <Breadcrumb.Item className={styles.Active} active>
            {this.props.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        {this.props.products.loading ? (
          <Loader />
            ) : (
                    
                    <div>
                    <PageTitle
                  title="Categories"
                />
            {this.props.products.categoryProducts.length === 0 ? (
              <div className={styles.NoItems}>NO PRODUCTS IN THIS CATEGORY</div>
            ) : (
              <>
                <CardList products={this.props.products.categoryProducts} />
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.categoryProducts,
});
export default connect(mapStateToProps, { getCategories, getCategoryProducts })(
  CategoryPage
);
