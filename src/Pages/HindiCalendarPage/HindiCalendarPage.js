import React, { Component } from "react";
// import CalendarComponents from "../../components/CalendarComponents/CalendarComponents";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import Page from "../../components/Page/Page";
import { Dropdown } from "react-bootstrap";
import styles from "./MonthMenu.module.css";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { getPage } from "../../Redux/Actions/PageActions";
import Loader from "../../components/Loader/Loader";
class HindiCalendarPage extends Component {
  state = { month: "january" };
  componentDidMount() {
    this.props.getPage(this.state.month);
  }
  render() {
    const months = [
      { value: "january", head: "JANUARY" },
      { value: "feburary", head: "FEBRUARY" },
      { value: "march", head: "MARCH" },
      { value: "arpril", head: "APRIL" },
      { value: "may", head: "MAY" },
      { value: "june", head: "JUNE" },
      { value: "july", head: "JULY" },
      { value: "august", head: "AUGUST" },
      { value: "september", head: "SEPTEMBER" },
      { value: "october", head: "OCTOBER" },
      { value: "november", head: "NOVEMBER" },
      { value: "december", head: "DECEMBER" },
    ];
    
    return (
      <div className="HindiCalendarPage">
        {/* <PageTitle />
        <CalendarComponents /> */}
        {/* <Page name={this.state.month} /> */}
        <div className={styles.Months}>
          {months.map((months,key) => {
            return (
              <div key={key}>
                <button
                  className={styles.MonthNames}
                  value={months.value}
                  onClick={() => {
                    this.setState({ month: months.value });
                    this.props.getPage(months.value);
                  }}
                >
                  {months.head}
                </button>
              </div>
            );
          })}

          <Dropdown className={styles.MonthMenuDropdown}>
            <Dropdown.Toggle className={styles.MonthMenuDropdownToggle}>
              MONTHS
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.MonthMenuDropdownMenu}>
              {months.map((months) => {
                return (
                  <Dropdown.Item
                    value={months.value}
                    onClick={() => {
                      this.setState({ month: months.value });
                      this.props.getPage(months.value);
                    }}
                  >
                    {months.head}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={styles.PageFromBackend}>
          {this.props.page.loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              {" "}
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
                  dangerouslySetInnerHTML={{
                    __html: this.props.page.page?.body,
                  }}
                ></div>
              </React.Fragment>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
export default connect(mapStateToProps, { getPage })(HindiCalendarPage);
