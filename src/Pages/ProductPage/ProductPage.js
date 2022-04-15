import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductDetails from "../../components/ProductPageComponents/ProductDetails";
import styles from "../CategoryPage/CategoryPage.module.css";
import { Breadcrumb } from "react-bootstrap";
import { connect } from "react-redux";
import { getProductId } from "../../Redux/Actions/ProductActions";
import Loader from "../../components/Loader/Loader";
import ProductReviews from "../../components/ProductPageComponents/ProductReviews/ProductReviews";

class ProductPage extends Component {
  componentDidMount() {
    let url = window.location.href;
    let res = url.split("/")[4];
    this.props.getProductId(res);
  }
  render() {
    return (
      <div className={styles.ProductPage}>
        {this.props.product.loading ? (
          <Loader />
        ) : Object.keys(this.props.product.error).length > 0 ? (
          <h3>{this.props.product.error.message}</h3>
        ) : (
          <React.Fragment>
            <Breadcrumb className={styles.BreadCrumb}>
              <Breadcrumb.Item className={styles.Visited} href="#">
                SHOP
              </Breadcrumb.Item>
              <Breadcrumb.Item className={styles.Active} active>
                {this.props.product.product.data?.name}
              </Breadcrumb.Item>
            </Breadcrumb>
            <PageTitle title={this.props.product.product.data?.name} />
                <ProductDetails />
                <ProductReviews/>
            {this.props.product?.product?.data?.relatedProducts.length > 0 ? (
              <React.Fragment>
                <PageTitle title="Recommended Products" />
                <CardList slide
                  products={this.props.product.product.data?.relatedProducts}
                />
              </React.Fragment>
            ) : undefined}
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ product: state.productDetails });
export default connect(mapStateToProps, { getProductId })(ProductPage);
// {this.props.product.product.data.name}
