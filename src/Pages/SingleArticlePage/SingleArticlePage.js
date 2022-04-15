import React, { Component } from "react";
import styles from "../CategoryPage/CategoryPage.module.css";
import { Breadcrumb } from "react-bootstrap";
import SingleBlogPage from "../../components/SingleBlogPage/SingleBlogPage";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getSingleBlog } from "../../Redux/Actions/BlogActions";
import Helmet from "react-helmet";
class SingleArticlePage extends Component {
  componentDidMount() {
    this.props.getSingleBlog(this.props.match.params.id);
  }
  render() {
    return (
      <div className={styles.SingleArticlePage}>
        {this.props.singleBlog.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Helmet>
              <title>{this.props.singleBlog?.data?.heading}</title>
            </Helmet>
            <Breadcrumb className={styles.BreadCrumb}>
              <Breadcrumb.Item className={styles.Visited} href="#">
                SHOP
              </Breadcrumb.Item>
              <Breadcrumb.Item className={styles.Visited} href="#">
                BLOGS
              </Breadcrumb.Item>
              <Breadcrumb.Item className={styles.Active} active>
                {this.props.singleBlog?.data?.heading}
              </Breadcrumb.Item>
            </Breadcrumb>
            <SingleBlogPage data={this.props.singleBlog.data} />
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ singleBlog: state.singleBlog });
export default connect(mapStateToProps, { getSingleBlog })(SingleArticlePage);
