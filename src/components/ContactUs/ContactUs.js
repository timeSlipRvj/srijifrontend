import React, { Component } from "react";
import styles from "./ContactUs.module.css";
import { Link } from "react-router-dom";
class ContactUs extends Component {
  render() {
    const setLink = (menu) => {
      if (menu.type === "URL") {
        return menu.url;
      } else if (menu.type === "Page") {
        return "/page/" + menu.page.url;
      }
    };
    return (
      <div className={styles.ContactUs}>
        {this.props.data?.map((item, key) => (
          <React.Fragment key={key}>
            
              <Link
                to={setLink(item)}
                Component={Link}
                className={styles.ContactIcons}
                key={key}
              >
                {item.name+" "}
              
              </Link>{"   ||  "}
         
          </React.Fragment>
        ))}
        {/* <span className={styles.ContactIcons}>LOCATE US </span>||
        <span className={styles.ContactIcons}> SEND QUERY </span>||
        <span className={styles.ContactIcons}> CONTACT US</span> */}
      </div>
    );
  }
}

export default ContactUs;
