import React, { Component } from "react";
import styles from "../CategoryPage/CategoryPage.module.css";
import styles2 from "../../components/BlogCardsList/BlogCardsList.module.css";
import styles3 from "./BlogsPage.module.css";
// import Category from "../../components/Category/Category";
import { Breadcrumb } from "react-bootstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBlogs } from "../../Redux/Actions/BlogActions";
import Loader from "../../components/Loader/Loader";
import BlogCard from "../../components/BlogCardsList/BlogCard/BlogCard";
import ReactPaginate from "react-paginate";

class BlogsPage extends Component {
  state = {
    pageNumber: 1,
  };
  componentDidMount() {
    if (this.props.blogs.blogs.length === 0) {
      this.props.getBlogs();
    }
  }
  render() {
    const blogsPerPage = 12;
    const dummyBlogs = [
      ...this.props.blogs.blogs,
    ];

    const newBlogs = () => {
      if (blogsPerPage !== 0) {
        let fromIndex = this.state.pageNumber * blogsPerPage - blogsPerPage;
        let toIndex = this.state.pageNumber * blogsPerPage;
        if (blogsPerPage >= dummyBlogs.length) {
          fromIndex = 0;
          toIndex = blogsPerPage;
          // setPageNumber(1)
          // console.log(fromIndex, toIndex)
        }
        return dummyBlogs.slice(
          this.state.pageNumber * blogsPerPage - blogsPerPage,
          this.state.pageNumber * blogsPerPage
        );
      } else {
        return dummyBlogs;
      }
    };
    return (
      <div>
        <Breadcrumb className={styles.BreadCrumb}>
          <Breadcrumb.Item className={styles.Visited} component={Link} to="/">
            <Link to="/"> HOME</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className={styles.Active}
            active
            component={Link}
            to="/blogs"
          >
            <Link to="/blogs"> BLOGS</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <PageTitle title={"Latest Blogs"} />
        {this.props.blogs.loading ? (
          <Loader />
        ) : (
          // <BlogCardsList data={this.props.blogs?.blogs} />
          <div>
            <div className={styles2.BlogCardsList}>
              {this.props.blogs.blogs &&
                newBlogs().map((single, key) => (
                  <BlogCard key={key} data={single} />
                ))}

              {/* <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard /> */}
            </div>
          </div>
        )}
        {blogsPerPage !== 0 && (
          <div className={styles3.Pagination}>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(dummyBlogs.length / blogsPerPage)}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={({ selected }) =>
                this.setState({ pageNumber: selected + 1 })
              }
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ blogs: state.blogs });
export default connect(mapStateToProps, { getBlogs })(BlogsPage);
