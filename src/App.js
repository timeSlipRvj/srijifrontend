import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar2 from "./components/Navbar2/Navbar2";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import Gaushala from "./Pages/Gaushala/Gaushala";
import GaushalaPage from "./Pages/GaushalaPage/GaushalaPage";
import PaymentGateway from "./Pages/PaymentGateway/PaymentGateway";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import {
  getMenus,
  getLogos,
  getFeatures,
  getGeneral,
  getSocial,
} from "./Redux/Actions/StorefrontActions";
import { getCategories } from "./Redux/Actions/CategoryActions";
import Tnc from "./Pages/Tnc/Tnc";
import SearchResults from "./Pages/SearchResults/SearchResults";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SingleArticlePage from "./Pages/SingleArticlePage/SingleArticlePage";
import HindiCalendarPage from "./Pages/HindiCalendarPage/HindiCalendarPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import MyProfile from "./Pages/MyProfile/MyProfile";
import CartPage from "./Pages/CartPage/CartPage";
import Page from "./components/Page/Page";
// import { getUserDetails } from "./Utils/Local";
import { setUserAction } from "./Redux/Actions/UserActions";
import SendQuery from "./Pages/QueryPage/QueryPage";
import Loader from "./components/Loader/Loader";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import { getBlogs } from "./Redux/Actions/BlogActions";
// import Navbar1 from "./components/Navbar1/Navbar1";
import Tagline from "./components/Tagline/Tagline";
import LoginPage from "./Pages/LoginPage/LoginPage";
class App extends Component {
  componentDidMount() {
    this.props.getMenus();
    this.props.getLogos();
    // this.props.getFeatures();
    // if (getUserDetails()) {
    //   this.props.setUserAction(getUserDetails());
    // }
    this.props.getCategories();
    this.props.getGeneral();
    this.props.getSocial();
    // this.props.getBlogs("-name", 0, 4);
  }
  render() {
    if (
      this.props.menus.loading ||
      this.props.logos.loading ||
      this.props.socials.loading ||
      this.props.general.loading
    ) {
      return <Loader />;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar2 logo={this.props.logos?.logos?.HeaderLogo?.image} />
          {/* <Tagline /> */}
          <Switch>
            <Route exact path="/" component={Home}/>
            {/*responsive*/}
            <Route exact path="/category/:id" component={CategoryPage} />{" "}
            {/*responsive*/}
            <Route exact path="/blogs" component={BlogsPage} />
            {/*responsive*/}
            <Route exact path="/login" component={LoginPage}/>
            {/*responsive*/}
            <Route exact path="/gaushala" component={Gaushala} />{" "}
            {/*responsive*/}
            <Route exact path="/gaushalapage" component={GaushalaPage} />{" "}
            {/*responsive*/}
            <PrivateRoute path="/cart" component={CartPage}></PrivateRoute>
            <PrivateRoute
              path="/payment"
              component={PaymentGateway}
            ></PrivateRoute>{" "}
            {/*responsive*/}
            <PrivateRoute
              path="/myprofile"
              component={MyProfile}
            ></PrivateRoute>{" "}
            {/*responsive*/}
            <PrivateRoute
              path="/wishlist"
              component={WishlistPage}
            ></PrivateRoute>{" "}
            {/*responsive*/}
            <Route exact path="/tnc" component={Tnc} />
            {/*responsive*/}
            <Route exact path="/shop" component={SearchResults} />{" "}
            {/*responsive*/}
            <Route
              exact
              path="/shop/:search/:sort"
              component={SearchResults}
            />{" "}
            {/*responsive*/}
            <Route exact path="/product/:id" component={ProductPage} />{" "}
            {/*responsive*/}
            <Route
              exact
              path="/article/:id"
              component={SingleArticlePage}
            />{" "}
            {/*responsive*/}
            {/* <Route exact path="/calendar" component={HindiCalendarPage} />{" "} */}
            {/*responsive*/}
            <Route exact path="/aboutus" component={AboutUsPage} />{" "}
            {/*responsive*/}
            <Route exact path="/query" component={SendQuery} />
            {/*responsive*/}
            <Route
              exact
              path="/page/:id"
              component={(props) => <Page key={Date.now()} {...props} />}
            />
            {/*responsive*/}
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  menus: state.menus,
  logos: state.logos,
  features: state.features,
  user: state.user,
  general: state.general,
  socials: state.socials,
});
export default connect(mapStateToProps, {
  getMenus,
  getLogos,
  getFeatures,
  setUserAction,
  getCategories,
  getGeneral,
  getBlogs,
  getSocial,
})(App);
