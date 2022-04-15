/* eslint-disable no-unreachable */
import React, { Component } from "react";
import { connect } from "react-redux";
import RecommendedBlogs from "./RecommendedBlogs/RecommendedBlogs";
import SingleBlogContent from "./SingleBlogContent/SingleBlogContent";
import styles from "./SingleBlogPage.module.css";
import { getBlogs } from "../../Redux/Actions/BlogActions";
import Loader from "../Loader/Loader";
class SingleBlogPage extends Component {
  componentDidMount() {
    if (this.props.blogs?.blogs?.length === 0) {
      this.props.getBlogs();
    }
  }
  render() {
    return (
      <div className={styles.SingleBlogPage}>
        <SingleBlogContent data={this.props.data} />
        {this.props.blogs.loading ? (
          <Loader />
        ) : (
          <RecommendedBlogs data={this.props.blogs?.blogs} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ blogs: state.blogs });
export default connect(mapStateToProps, { getBlogs })(SingleBlogPage);
