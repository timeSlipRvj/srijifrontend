/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import styles from "./Navbar2.module.css";
import { BiCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
// import Tagline from "../Tagline/Tagline";
import { Dropdown } from "react-bootstrap";
import Multi from "react-multilevel-dropdown";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import TestImage6 from "../../images/dummyprofileimage.png";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../../Redux/Actions/UserActions";
import { getUserDetails } from "../../Utils/Local";
import { getCart } from "../../Redux/Actions/CartActions";
import { getWishlist } from "../../Redux/Actions/WishlistActions";
import { FaBox } from "react-icons/fa";
import { RiAccountCircleFill, RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineRollback } from "react-icons/ai";
import { Link, withRouter } from "react-router-dom";
// import { AiOutlineRollback } from "react-icons/ai";
import { baseUrl } from "../../api";
import Navbar1 from "../Navbar1/Navbar1";
class Navbar2 extends Component {
  ChangeState = () => {
    this.setState = {
      ...this.state,
      ShowIcons: true,
    };
  };

  state = {
    menus: [],
    ShowIcons: false,
    displayNav: true,
    LoginState: "initial",
    LoggedInStatus: this.props.user.loggedIn ? "signedin" : "",
    formData: { fname: "", lname: "", email: "", password: "", repass: "" },
    credentials: { email: "", password: "" },
    error: { message: "" },
  };
  
  setMenuLink = (item) => {
    if (item.type === "URL") {
      return item.url;
    } else if (item.type === "Page") {
      return item.page.url;
    } else if (item.type === "Category") {
      let url = "/category/" + item.category.url + "/" + item.category._id;
      return url;
    }
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }
  onRouteChanged() {
    if (this.props.location.pathname === "/") {
      this.setState({ displayNav: true });
    } else {
      this.setState({ displayNav: false });
    }
  }
  componentDidMount() {
    const { menus } = this.state;
    if (this.props.user.loggedIn) {
      this.props.getCart();
      this.props.getWishlist();
    }
    const setCategories = (root, key) => {
      if (root.childrenMenu.length === 0) {
        return (
          <Link
            to={this.setMenuLink(root) ? this.setMenuLink(root) : "/"}
            key={key}
          >
            <Multi.Item
              className={styles.DropDownItem}
              href={this.setMenuLink(root)}
            >
              {root.name}
            </Multi.Item>
          </Link>
        );
      } else
        return (
          <Link
            to={this.setMenuLink(root) ? this.setMenuLink(root) : "/"}
            key={key}
          >
            <Multi.Item
              className={styles.DropdownCategorySubmenu}
              href={this.setMenuLink(root)}
            >
              {root.name}
              <Multi.Submenu position="right">
                {root.childrenMenu.map((child, key2) => {
                  return setCategories(child, key2);
                })}
              </Multi.Submenu>
            </Multi.Item>
          </Link>
        );
    };
     this.props.menus.menus.Menus?.PrimaryMenu?.menuItems.forEach(
      (menu, key) => {
        let tempData = { content: [], isDropDown: false };
        // console.log("Working");
        if (menu.childrenMenu.length > 0) {
          tempData.title = menu.name;

          tempData.isDropDown = true;
          menu.childrenMenu.forEach((menuItem, key) => {
            tempData.content.push(setCategories(menuItem, key));
          });
        } else {
          tempData.title = menu.name;
        }
        tempData.url = menu.url;
        tempData.content = setCategories(menu);
        menus.push(tempData);
      }
    );
    this.setState({ ...this.state, menus: menus });
    // console.log(this.state);
  }

  UNSAFE_componentWillReceiveProps() {
    if (getUserDetails()) {
      this.setState({
        ...this.state,
        LoggedInStatus: "signedin",
      });
    } else {
      this.setState({
        ...this.state,
        LoginState: "initial",
        LoggedInStatus: "",
      });
    }
  }
  render() {
    const handleChange = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        formData: { ...this.state.formData, [e.target.name]: e.target.value },
      });
    };
    const handlecreChange = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
        },
      });
    };
    // console.log(this.props);

    const handleSubmit = (e) => {
      if (
        this.state.formData.fname === "" ||
        this.state.formData.email === "" ||
        this.state.formData.password === "" ||
        this.state.formData.repass === ""
      ) {
        this.setState({
          ...this.state,
          error: { message: "please fill all the feilds" },
        });
      }
      if (this.state.formData.password !== this.state.formData.repass) {
        this.setState({
          ...this.state,
          error: { message: "password doesn't match" },
        });
      } else {
        const user = {
          "First Name": this.state.formData.fname,
          "Last Name": this.state.formData.lname,
          Email: this.state.formData.email,
          Password: this.state.formData.password,
          Confirm: this.state.formData.repass,
          Roles: [],
          Permissions: [],
        };
        // console.log(user);
        this.props.registerUser(user);
      }
    };

    return (
      <div>
        {this.state.displayNav === true && <Navbar1 logo={this.props.logo} />}
        <nav className={styles.MainNav}>
          <div className={styles.Logo}>
            <Link to="/">
              <img
                className={styles.LogoImage}
                src={baseUrl + this.props.logos?.logos?.HeaderLogo?.image}
                alt="LogoImage"
              />
            </Link>
          </div>

          <div
            className={
              this.state.ShowIcons ? styles.MobileMenuLink : styles.MenuLink
            }
          >
            {/* // TODO: DONOT REMOVE THIS IT IS PART OF NAVBAR */}

            <ul>
              {this.state.menus.map((menu, key) => {
                if (menu.isDropDown) {
                  return (
                    <li id={styles.HeaderComponents}  key={key}>
                      <Multi
                        className={styles.HeaderOptions}
                        title={menu.title}
                      >
                        {menu.content}
                      </Multi>
                    </li>
                  );
                } else {
                  return (
                    <li id={styles.HeaderComponents}   key={key}>
                      <Link to={menu.url}>{menu.title}</Link>
                    </li>
                  );
                }
              })}
              {/* <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li> */}
              {/* <li>
                <Link to="/gaushala">GAUSHALA</Link>
              </li> */}
              {/* <li>
                <Link to="/calendar">HINDI CALENDAR</Link>
              </li> */}
              {/* <li>
                <Link to="/blogs">BLOGS</Link>
              </li> */}
              {/* <li>
                <Link to="/sendquery">SEND QUERY</Link>
              </li> */}
            </ul>
          </div>
          {this.state.LoggedInStatus === "" && (
            <Dropdown>
              <Link to = "/login">
              <Dropdown.Toggle
                id="dropdown-basic"
                // onClick={(e) =>
                //           this.setState({
                //             ...this.state,
                //             LoginState: "initial",
                //           })
                //         }
                className={styles.SignUpButton}
              >
                <span className={styles.Signup}>SINGUP/SIGNIN</span>
                <span className={styles.SignupResponsive}>SIGNUP</span>
              </Dropdown.Toggle>
              </Link>
              {/* <Dropdown.Menu className={styles.DropdownMenu}>
                {this.state.LoginState === "initial" && (
                  <div>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <Button
                        className={styles.SignInWithGoogle}
                        onClick={(e) =>
                          this.setState({
                            ...this.state,
                            LoggedInStatus: "signedin",
                          })
                        }
                      >
                        SIGN IN WITH GOOGLE
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <Button
                        className={styles.NormalSignInButton}
                        onClick={(e) => {
                          this.setState({
                            ...this.state,
                            LoginState: "normalsignin",
                          });
                          e.stopPropagation();
                        }}
                      >
                        NORMAL SIGN IN
                      </Button>
                    </Dropdown.Item>
                    <div className={styles.Or}>OR</div>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <Button
                        className={styles.NewUser}
                        onClick={(e) => {
                          this.setState({
                            ...this.state,
                            LoginState: "signup",
                          });
                          e.stopPropagation();
                        }}
                      >
                        SIGN UP
                      </Button>
                    </Dropdown.Item>
                  </div>
                )}
                {this.state.LoginState === "signup" && (
                  <div>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <Button
                        className={styles.SignInWithGoogle}
                        onClick={() =>
                          this.setState({
                            ...this.state,
                            LoggedInStatus: "signedin",
                          })
                        }
                      >
                        SIGN UP WITH GOOGLE
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <Button
                        className={styles.NewUser}
                        onClick={(e) => {
                          this.setState({
                            ...this.state,
                            LoginState: "manually",
                          });
                          e.stopPropagation();
                        }}
                      >
                        MANUALLY
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <AiOutlineRollback
                        className={styles.AiOutlineRollback}
                        onClick={(e) => {
                          this.setState({
                            ...this.state,
                            LoginState: "initial",
                          });
                          e.stopPropagation();
                        }}
                      />
                    </Dropdown.Item>
                  </div>
                )}
                {this.state.LoginState === "normalsignin" && (
                  <div>
                    <input
                      className={styles.InputDetails}
                      placeholder="Email Address"
                      type="text"
                      name="email"
                      onChange={handlecreChange}
                    ></input>
                    <input
                      className={styles.InputDetails}
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handlecreChange}
                    ></input>
                    <span className={styles.ForgotPassword}>
                      <Link to="#">forgot Password</Link>
                    </span>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <AiOutlineRollback
                        className={styles.AiOutlineRollback}
                        onClick={(e) => {
                          this.setState({
                            ...this.state,
                            LoginState: "initial",
                          });
                          e.stopPropagation();
                        }}
                      />
                      <Button
                        className={styles.NewUser}
                        onClick={() => {
                          this.props.loginUser(
                            this.state.credentials.email,
                            this.state.credentials.password
                          );
                        }}
                        href="/"
                      >
                        SIGN IN
                      </Button>
                    </Dropdown.Item>
                  </div>
                )}
                {this.state.LoginState === "manually" && (
                  <div>
                    <input
                      className={styles.InputDetails}
                      placeholder="First Name"
                      type="text"
                      name="fname"
                      onChange={handleChange}
                      value={this.state.formData.fname}
                    ></input>
                    <input
                      className={styles.InputDetails}
                      placeholder="Last Name"
                      type="text"
                      name="lname"
                      onChange={handleChange}
                      value={this.state.formData.lname}
                    ></input>
                    <input
                      className={styles.InputDetails}
                      placeholder="Email Address"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={this.state.formData.email}
                    ></input>
                    <input
                      className={styles.InputDetails}
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={this.state.formData.password}
                    ></input>
                    <input
                      className={styles.InputDetails}
                      placeholder="Re-enter Password"
                      type="password"
                      name="repass"
                      onChange={handleChange}
                      value={this.state.formData.repass}
                    ></input>
                    {this.state.formData.password ===
                      this.state.formData.repass &&
                    this.state.formData.password !== "" &&
                    this.state.error.message === "" ? (
                      <div className={styles.PasswordMatch}>
                        Password Match Successful
                      </div>
                    ) : null
                    
                    }
                    {this.state.error.message !== "" ? (
                      <div className={styles.PasswordMatch}>
                        {this.state.error.message}
                      </div>
                    ) : undefined}
                    <Dropdown.Item className={styles.DropDownItem}>
                      <AiOutlineRollback
                        className={styles.AiOutlineRollback}
                        onClick={(e) => {
                          this.setState({
                            ...this.state,
                            LoginState: "initial",
                          });
                          e.stopPropagation();
                        }}
                      />
                      <Button
                        className={styles.NewUser}
                        onClick={(e) => {
                         
                          e.stopPropagation();
                          handleSubmit(); 
                        }}
                        type="submit"
                        
                      >
                        {" "}
                        SIGN UP{" "}
                      </Button>
                    </Dropdown.Item>
                  </div>
                )}
                {this.state.LoginState === "Confirmation" && (
                  <div>
                    <p className={styles.Confirmation}>
                      Confirmation mail has been sent to you on your mail id
                    </p>
                    <Dropdown.Item className={styles.DropDownItem}>
                      <Button
                        className={styles.NewUser}
                        onClick={() =>
                          this.setState({
                            ...this.state,
                            LoggedInStatus: "signedin",
                          })
                        }
                        href="/"
                      >
                        REFRESH
                      </Button>
                    </Dropdown.Item>
                  </div>
                )}
              </Dropdown.Menu> */}
            </Dropdown>
          )}
          {this.state.LoggedInStatus === "signedin" && (
            <div>
              <div className={styles.ProfileName}>
                <Dropdown className={styles.LogOutOptions}>
                  <Dropdown.Toggle
                    className={styles.LoggedInStatus}
                    variant="success"
                    id="dropdown-basic"
                  >
                    <img
                      className={styles.ProfilePicture}
                      src={TestImage6}
                      alt="ProfilePicture"
                      href="/myprofile"
                    ></img>
                    <span className={styles.WelcomeMsg}>
                      <span>Hi, </span>
                      <span className={styles.UserName}>
                        {this.props.user.user.ID
                          ? this.props.user.user["First Name"]
                          : ""}
                      </span>
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      className={styles.AfterLoggedInDropdownItems}
                    >
                      <RiAccountCircleFill
                        className={styles.RiAccountCircleFill}
                      />
                      <Link to="/myprofile">
                        <span id={styles.MyProfileButton}>MY PROFILE</span>
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item
                      className={styles.AfterLoggedInDropdownItems}
                      href="/myprofile"
                    >
                      <FaBox />
                      <span id={styles.MyOrders}>MY ORDERS</span>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={styles.AfterLoggedInDropdownItems}
                      href="/"
                    >
                      <RiLogoutBoxLine className={styles.RiLogoutBoxLine} />
                      <span
                        id={styles.LogOut}
                        onClick={() => {
                          this.props.logoutUser();
                          // this.props.history.push("/");
                        }}
                      >
                        LOGOUT
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="/wishlist">
                  <BsFillHeartFill className={styles.Favourites} />
                  {/* {console.log(this.props.wishlist?.wishlist?.length)} */}
                  {
                    <span className={styles.WishlistCount}>
                      {this.props.wishlist?.wishlist?.length}
                    </span>
                  }
                </Link>
              </div>
            </div>
          )}
          <Link to="/cart">
            {" "}
            <BiCart className={styles.BiCart} />{" "}
            {this.state.LoggedInStatus === "signedin" && (
              <span className={styles.CartCount}>
                {this.props.cart.cart?.length}
              </span>
            )}
          </Link>

          <div
            className={styles.HamburgerMenu}
            onClick={() =>
              this.setState({ ...this.state, ShowIcons: !this.state.ShowIcons })
            }
          >
            <GiHamburgerMenu />
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  menus: state.menus,
  user: state.user,
  cart: state.cart,
  wishlist: state.wishlist,
  logos: state.logos,
});
export default connect(mapStateToProps, {
  loginUser,
  logoutUser,
  getCart,
  getWishlist,
  registerUser,
})(Navbar2);
// })(withRouter(Navbar2));
