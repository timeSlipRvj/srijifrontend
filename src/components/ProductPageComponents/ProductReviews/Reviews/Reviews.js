import React, { Component } from "react";
import styles from "./Reviews.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ShowReview from "./ShowReview";
import { Button } from "react-bootstrap";
import api from "../../../../api"
import { connect } from "react-redux";
import { toast } from "react-toastify";



class Reviews extends Component {
  state = {
    review: {
      reviewerName: this.props.user.user._id
        ? this.props.user.user["First Name"] +
          " " +
          this.props.user.user["Last Name"]
        : "",
      rating: 1,
      comment: "",
      status: true,
    },
    productReviews: [],
  };
  componentDidMount() {
    // let url = "/product/get/" + this.props.product.product.data._id;
    // api
    //   .get(url)
    //   .then((res) => {
    //     this.setState({ productDetails: res.data.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // this.getReviews();
  }
  getReviews = () => {
    let url = "/review/get/product/" + this.props.product.product.data._id;
    api
      .get(url)
      .then((res) => {
        this.setState({ productReviews: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  postReview = (review, productId) => {
    api
      .post("/review", {
        data: review,
        productId,
        requiredPermission: "Create Review",
      })
      .then((res) => {
        // alert("review submitted for approval");
        console.log(res)
        toast.success(`Review submitted for approval`, {
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((err) => {
        toast.error(
          `${
            err.response?.data?.message
              ? err.response.data.message
              : "Something went wrong."
          }`,
          {
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      });
  };
  render() {
    console.log(this.state, this.props);
    return (
      <div className={styles.Reviews}>
        <div>Read Reviews Here</div>
        <div className={styles.StarRating}>
          <AiFillStar className={styles.AiFillStar} />
          <AiFillStar className={styles.AiFillStar} />
          <AiFillStar className={styles.AiFillStar} />
          <AiOutlineStar className={styles.AiFillStar} />
          <AiOutlineStar className={styles.AiFillStar} />
        </div>
        <div className={styles.FlexBox}>
          <div className={styles.addReviews}>
            <textarea
              className={styles.WriteReviews}
              placeholder="Choose a rating and start writing a review..."
              value={this.state.review.comment}
              onChange={(e) => {
                const { review } = this.state;
                review.comment = e.target.value.substring(0, 200);
                this.setState({ review });
              }}
            ></textarea>
          </div>
          <Button
            className={styles.AddToCardButton}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              this.postReview(
                this.state.review,
                this.props.product.product.data._id
              );
            }}
          >
            POST REVIEW
          </Button>
        </div>
        <div className={styles.ShowOthersReviews}>
          {/* <ShowReview />
          <ShowReview />
          <ShowReview />
          <ShowReview /> */}
          {this.state.productReviews.length > 0 ? (
            this.state.productReviews.map((review, key) => {
              return review.status && <ShowReview key={key} review={review} />;
            })
          ) : (
            <div className="text-center">
              Be the first one to review this product!
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    product: state.productDetails,
  };
};
export default connect(mapStateToProps)(Reviews);