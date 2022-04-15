import React, { Component } from "react";
import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";
class AboutUs extends Component {
  render() {
    const setLink = (menu) => {
      if (menu.type === "URL") {
        return menu.url;
      } else if (menu.type === "Page") {
        return "/page/" + menu.page.url;
      }
    };
    return (
      <div className={styles.AboutUs}>
        <div className={styles.AbtusTnc}>
          {/* {console.log(this.props.data)} */}
          {this.props.data?.map((item, key) => (
            <React.Fragment>
              <div key={key}>
                <Link to={setLink(item)}>
                  <span className={styles.Aboutus}>{item.name}</span>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default AboutUs;
