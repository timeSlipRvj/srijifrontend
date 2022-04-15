import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import styles from "./SearchResults.module.css";
import { FiSearch } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductActions";
import Loader from "../../components/Loader/Loader";
import { getCategoryProducts } from "../../Redux/Actions/CategoryActions";
import { Link } from "react-router-dom";
class SearchResults extends Component {
  state = {
    search: "",
    sort: "createdAt",
    redirect: false,
    filteredProducts: this.props.products.categoryProducts,
  };
  componentDidMount() {
    this.props.getCategoryProducts(
      this.props.match.params.sort,
      0,
      0,
      this.props.match.params.search,
      []
    );
    // console.log(this.props.match);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        filteredProducts: this.props.products.categoryProducts.filter(
          (products) => products.name.toLowerCase().includes(this.state.search)
        ),
      });
    }
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  render() {
    // const handleChange = (e) => {
    //   this.setState({ ...this.state, [e.target.name]: e.target.value });
    //   // console.log(e.target.value, e.target.name);
    //   // searchResults(this.state.search)

    //   // console.log(result)

    //   // this.setState({ ...this.state, filteredProducts: result });
    // };

    // const searchResults = () => {
    //   const result = this.state.filteredProducts.filter((products) =>
    //     products.name.toLowerCase().includes(this.state.search)
    //   );
    //   this.setState({ ...this.state, filteredProducts: result });
    // };
    // this.setState({
    //   ...this.state,
    //   filteredProducts: this.state.filteredProducts.filter((products) =>
    //     products.name.toLowerCase().includes(this.state.search)
    //   ),
    // });
    // console.log(this.state);
    const result = this.state.filteredProducts.filter((products) =>
      products.name.toLowerCase().includes(this.state.search)
    );

    // console.log(result);

    return (
      <div className={styles.SearchResults}>
        <div className={styles.FilterBar}>
          <span>
            {this.props.match.params.search ? (
              <React.Fragment>
                <span className={styles.GreyHeads}>Search results for:</span>{" "}
                {this.props.match.params.search}
              </React.Fragment>
            ) : undefined}
          </span>
          {/* <span className={styles.FilterDropDown}>
            <span className={styles.GreyHeads}> Sort By:</span>
            <Dropdown className={styles.FilterDropdown}>
              <Dropdown.Toggle id="dropdown-basic" className={styles.Filter}>
                NEWEST
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.DropdownMenu}>
                <div className={styles.DropdownItems}>
                  <Dropdown.Item
                    className={styles.DropDownItem}
                    href={"/shop/all/-price"}
                  >
                    HIGH TO LOW
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.DropDownItem}
                    href={"/shop/all/price"}
                  >
                    LOW TO HIGH
                  </Dropdown.Item>

                  <Dropdown.Item
                    className={styles.DropDownItem}
                    href={"/shop/all/-createdAt"}
                  >
                    Newest
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </span> */}
          <span className={styles.SearchSpan}>
            <input
              type="text"
              className={styles.SearchBar}
              placeholder="Search.."
              name="search"
              value={this.state.search}
              onChange={this.handleChange.bind(this)}
            />
            <Link to={"/shop/" + this.state.search + "/" + this.state.sort}>
              <button
                className={styles.SearchButton}
                type="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.setState({ redirect: true });
                  this.props.history.push(
                    "/shop/" + this.state.search + "/" + this.state.sort
                  );
                }}
              >
                <FiSearch />
              </button>
            </Link>
          </span>
        </div>
        {this.props.products.loading ? (
          <Loader />
        ) : (
            <React.Fragment>
              {this.props.products.categoryProducts?.length === 0 && <div style={{textAlign: 'center', padding: "1em"}}>No products found.</div>}
            <CardList
              products={
                this.state.filteredProducts.length === 0
                  ? this.props.products.categoryProducts
                  : this.state.filteredProducts
              }
            />
                {/* <CardList /> */}
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.categoryProducts });
export default connect(mapStateToProps, { getProducts, getCategoryProducts })(
  SearchResults
);
