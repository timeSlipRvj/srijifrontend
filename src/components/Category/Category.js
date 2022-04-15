import React, { Component } from "react";
// import Tagline from "../Tagline/Tagline";
import styles from "./Category.module.css";
// import TestImage from "../../images/testimage1.jpg";
import { connect } from "react-redux";
import Dropdown from "react-multilevel-dropdown";
import { Link } from "react-router-dom";
class Category extends Component {
  state = { menus: [] };
  setMenuLink = (item) => {
    // if (item.type === "URL") {
    //   return item.url;
    // } else if (item.type === "Page") {
    //   return item.page.url;
    // } else if (item.type === "Category") {
    let url = "/category/" + item._id;
    return url;
    // }
  };
  componentDidMount() {
    const { menus } = this.state;
    const setCategories = (root, key) => {
      if (root.childrenCategory.length === 0) {
        return (
          <Dropdown.Item className={styles.DropDownItem}>
            <Link to={this.setMenuLink(root)} key={key}>
              {" "}
              {root.name}
            </Link>
          </Dropdown.Item>
        );
      } else
        return (
          <Link to={this.setMenuLink(root)} key={key}>
            <Dropdown.Item className={styles.DropdownCategorySubmenu}>
              {root.name}
              <Dropdown.Submenu position="right">
                {root.childrenCategory.map((child, key2) => {
                  return setCategories(child, key2);
                })}
              </Dropdown.Submenu>
            </Dropdown.Item>
          </Link>
        );
    };

    this.props.menus?.forEach((menu, key) => {
      let tempData = { content: [], isDropDown: false };
      if (menu.childrenCategory.length > 0) {
        //tempData.title = menu.name;
        tempData.title = (
          <Link to={this.setMenuLink(menu)} key={key}>
            {" "}
            {menu.name}
          </Link>
        );

        tempData.isDropDown = true;
        menu.childrenCategory.forEach((menuItem, key) => {
          tempData.content.push(setCategories(menuItem, key));
        });
      } else {
        tempData.title = menu.name;
      }
      // tempData.content = setCategories(menu);
      menus.push(tempData);
    });
    this.setState({ ...this.state, menus: menus });
  }
  render() {
    console.log(this.props, this.state)
    return (
      <div className={styles.Categories}>
        <div className={styles.CategoryList}>
          <div className={styles.Category}>
            {this.state.menus.map((menu, key) => {
              if (menu.isDropDown) {
                return (
                  <>
                    {menu.title}
                    {menu.content && (
                      <Dropdown
                        key={key}
                        style={{ margin: "0px 10px" }}
                        className={styles.DropdownCategoryTitle}
                        title="&#9660;"
                      >
                        {menu.content}
                      </Dropdown>
                    )}
                  </>
                );
              } else {
                return (
                  <Dropdown
                    key={key}
                    className={styles.DropdownCategoryTitle}
                    title={menu.title}
                  ></Dropdown>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ menus: state.categories.categories });
export default connect(mapStateToProps, {})(Category);
