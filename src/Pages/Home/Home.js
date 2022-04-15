import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import Category from "../../components/Category/Category";
import PageTitle from "../../components/PageTitle/PageTitle";
// import Footer from "../../components/Footer/Footer";
// import DoubleBanner from "../../components/Banners/DoubleBanner/DoubleBanner";
// import SlidingCarouselCardsList from "../../components/SlidingCarouselCardList/SlidingCarouselCardList";
import { getProductTabs } from "../../Redux/Actions/StorefrontActions";
import { getBlogs } from "../../Redux/Actions/BlogActions";
import { connect } from "react-redux";
// import HorizontalCard from "../../components/HorizontalCards/HorizontalCards";
import HorizontalCardsList from "../../components/HorizontalCardsList/HorizontalCardsList";
import ImagesOfProducts from "../../components/ImagesOfProduct/ImagesOfProduct";
import CategoryCardsList from "../../components/CategoryCardsList/CategoryCardsList";
import BlogCardsList from "../../components/BlogCardsList/BlogCardsList";
import styles from "./Home.module.css";
// import TodaysSpecial from "../../components/TodaysSpecial/TodaysSpecial";
import Loader from "../../components/Loader/Loader";
import Helmet from "react-helmet";
// import Navbar1 from "../../components/Navbar1/Navbar1";
class Page2 extends Component {
  componentDidMount() {
    this.props.getProductTabs();
    // this.props.getBannerImages();
    this.props.getBlogs();
  }

  render() {
    // console.log(this.props)
    return (
      <div className={styles.Home}>
        <Helmet>
          <title>{this.props.general.data?.WelcomeText}</title>
        </Helmet>
        {this.props.productTabs.loading || this.props.bannerData.loading ? (
          <Loader />
        ) : this.props.productTabs.error ? (
          <h2>{this.props.productTabs.error.message}</h2>
        ) : (
          <React.Fragment>
            <Category />
            {this.props.productTabs.productTabs[0]?.Tabs.map((item, key) =>
              item.Products.length > 0 ? (
                <React.Fragment key={key}>
                  <PageTitle title={item.Title} />
                  <CardList products={item.Products} />
                </React.Fragment>
              ) : undefined
            )}

            {/* <PageTitle /> */}
            {/* <SlidingCarouselCardsList/> */}
            {/* <PageTitle /> */}
            <HorizontalCardsList
              data={this.props.productTabs.productTabs[1]?.Tabs}
            />
            <ImagesOfProducts data={this.props.general.data.Slider} />
            <PageTitle title={"Categories"} />
            <CategoryCardsList data={this.props.categories.categories} />
            {/* <PageTitle title={"Today's Special"} /> */}
            {/* <TodaysSpecial /> */}
            {this.props.productTabs.productTabs[2]?.Tabs.map((item, key) =>
              item.Products.length > 0 ? (
                <React.Fragment key={key}>
                  <PageTitle title={item.Title} />
                  <CardList products={item.Products} />
                </React.Fragment>
              ) : undefined
            )}
            <PageTitle title={"Blogs"} />
            <BlogCardsList data={this.props.blogs.blogs.slice(0, 4)} /> 
            <div className={styles.BannerLine}>
              WE BELEIVE IN SELLING BEST QUALITY PRODUCTS. TRY ORDERING NOW AND
              CONFIRM.
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  productTabs: state.productTabs,
  bannerData: state.bannerData,
  categories: state.categories,
  general: state.general,
  blogs: state.blogs,
});

export default connect(mapStateToProps, { getProductTabs, getBlogs })(Page2);
