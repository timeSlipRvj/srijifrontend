import React, { Component } from "react";
import styles from "./BlogCard.module.css";
// import TestImage from "../../../images/testimage1.jpg";
import { Button } from "react-bootstrap";
import { baseUrl } from "../../../api";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Alert from "@material-ui/lab/Alert";


class BlogCard extends Component {
  state = {
    copied: false,
  };
  render() {
    return (
      <div
        className={
          this.props.recommended ? styles.CardsInRecommendation : styles.Card
        }
        key={this.props.key}
      >
        <div className={styles.CardImagePart}>
          <Link to={"/article/" + this.props.data?._id}>
            <img
              className={styles.CardImage}
              src={baseUrl + this.props.data?.img?.image}
              // src={TestImage}
              alt=""
            />
          </Link>
          <CopyToClipboard
            text={
              "https://www.shrijishringar.com/article/" + this.props.data?._id
            }
            onCopy={() => {
              this.setState({ copied: true });
              setTimeout(() => {
                this.setState({ copied: false });
              }, 3000);
            }}
          >
            <AiOutlineShareAlt
              className={styles.ShareButton}
              onClick={() => {
                // console.log("click");
                // navigator.clipboard.writeText("https://www.shrijishringar.com/article/" + this.props.data?._id);

                /* Alert the copied text */
                // alert("Copied Link text");
              }}
            />
          </CopyToClipboard>

          <div className={styles.CardImageHover}>
            <div className={styles.CardButtons}>
              <Link
                to={"/article/" + this.props.data?._id}
                className={styles.ReadArticleButton}
                Component={Button}
              >
                READ ARTICLE
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.CardText}>
          {/* <div className={styles.BlogAuthor}>MOHIT GOYAL</div> */}
          <div className={styles.BlogCardName}>{this.props.data?.heading}</div>

          <div className={styles.Time}>
            {Math.round(this.props.data?.body?.split(" ").length / 200)} min
          </div>
        </div>
        {this.state.copied ? (
          <Alert severity="success" className={styles.alert}>
            Copied
          </Alert>
        ) : null}
      </div>
    );
  }
}

export default BlogCard;
