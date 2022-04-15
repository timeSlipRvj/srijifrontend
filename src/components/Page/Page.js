import React, { Component } from "react";
import { connect } from "react-redux";
import { getPage } from "../../Redux/Actions/PageActions";
import Loader from "../Loader/Loader";
import { Helmet } from "react-helmet";
import styles from "./Page.module.css";

class Page extends Component {
  componentDidMount() {
    if (this.props.match?.params?.id) {
      this.props.getPage(this.props.match?.params?.id);
    } else {
      this.props.getPage(this.props.name);
    }
  }
  
  render() {
    if (this.props.page.loading) {
      return <Loader />;
    } else
      return (
        <div className={styles.PageFromBackend}>
          <React.Fragment>
            <Helmet>
              <title>{this.props.page.page?.metaTitle}</title>
              <meta
                name="description"
                content={this.props.page.page?.metaDescription}
              />
            </Helmet>

            <div className="Heading_about">
              <p>{this.props.page.page?.name}</p>
              <hr />
            </div>
            <div
              className="mission_about"
              dangerouslySetInnerHTML={{ __html: this.props.page.page?.body }}
            ></div>
          </React.Fragment>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
export default connect(mapStateToProps, { getPage })(Page);
