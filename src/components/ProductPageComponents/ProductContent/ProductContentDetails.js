import React, { Component } from "react";
import styles from "./ProductContentDetails.module.css";
import { Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { connect } from "react-redux";
import api from "../../../api";
import { addToCart } from "../../../Redux/Actions/CartActions";
import { getAuthToken } from "../../../Utils/Local";
import { Link } from "react-router-dom";
class ProductContentDetails extends Component {
  state = {
    product: {
      name: "Product Name",
      price: "Price",
      specialPrice: 0,
      categories: [],
      tags: [],
      shortDescription: "Description",
      rating: 0,
      productId: "",
      options: [],
    },
    inCart: this.props.cart.cart.filter(
      (items) => items.product._id === this.props.product.product.data._id
    ),
    stock: [],
    selectedStockArray: [],
    stockId: null,
    qty: 1,
  };
  componentDidMount() {
    if (this.props.product.product.data) {
      let token = getAuthToken();
      api
        .post("/product/stock/byproduct/get", {
          headers: { token: token },
          productId: this.props.product.product.data._id,
        })
        .then((res) => {
          const { stock } = this.state;
          res.data.data.forEach((stk) => {
            stock[stk.name] = [stk.qty, stk.price, stk._id];
          });
          this.setState({ ...this.state, stock });
          // console.log(this.state.stock);
        })
        .catch((err) => {
          // console.log(err);
        });
      this.setState({
        ...this.state,
        product: this.props.product.product.data,
      });
    }
  }
  getOption = (type, label, required, values, unique) => {
    if (type === "Field") {
      return (
        <div className={styles.FieldExtra} key={unique}>
          <p className={styles.ParagraphInProductSingles}>
            {" "}
            {label}: {required && "*"}
          </p>
          <input
            className={styles.DropdownInProductSingles}
            type="text"
            required={required}
          />
        </div>
      );
    } else if (type === "Textarea") {
      return (
        <div
          key={unique}
        >
          <p className={styles.ParagraphInProductSingles}>
            {" "}
            {label}: {required && "*"}
          </p>
          <textarea
            className={styles.DropdownInProductSingles}
            type="text"
            row="3"
            required={required}
          ></textarea>
        </div>
      );
    } else if (type === "Dropdown") {
      return (
        <div  key={unique}>
          <p className={styles.ParagraphInProductSingles}>
            {" "}
            {label}
            {required && "*"}
          </p>
          <select
            className={styles.DropdownInProductSingles}
            onChange={(e) => {
              const { selectedStockArray } = this.state;
              selectedStockArray[unique] = e.target.value;
              const [selectedOption] = values.filter(
                (value) => value.label === e.target.value
              );
              console.log(selectedOption);

              this.setState({
                selectedStockArray,
                product: {
                  ...this.state.product,
                  specialPrice: selectedOption.price
                    ? selectedOption.price
                    : this.state.product.specialPrice,
                },
              });
            }}
            required={required}
          >
            <option value={null} key="-1">
              {"Choose Option"}
            </option>
            {values.map((value, key) => {
              return (
                <option value={value.label} key={key}>
                  {value.label}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else if (type === "Checkbox") {
      return (
        <div key={unique}>
          <p className={styles.ParagraphInProductSingles}>
            {" "}
            Choose {label}: {required && "*"}
          </p>
          <div
            className={styles.DropdownInProductSingles}
            style={{ height: "100%", marginLeft: "0.9vw" }}
          >
            {values.map((value, key) => {
              return (
                <div  key={key}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      const { selectedStockArray } = this.state;
                      if (selectedStockArray[unique] === undefined) {
                        selectedStockArray[unique] = [];
                      }
                      if (selectedStockArray[unique][key] === value.label) {
                        selectedStockArray[unique].splice(key, 1);
                      } else selectedStockArray[unique][key] = value.label;
                      // console.log(selectedStockArray);
                      const [selectedOption] = values.filter(
                        (value) => value.label === e.target.value
                      );
                      console.log(selectedOption);

                      this.setState({
                        selectedStockArray,
                        product: {
                          ...this.state.product,
                          specialPrice: selectedOption.price
                            ? selectedOption.price
                            : this.state.product.specialPrice,
                        },
                      });
                    }}
                  ></input>
                  <label>{value.label}</label>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (type === "Custom Checkbox") {
    } else if (type === "Radio Button") {
      return (
        <React.Fragment>
          <p className={styles.ParagraphInProductSingles}>Choose {label}</p>
          {values.map((value, key) => (
            <React.Fragment>
              <label for={key}>{value.label}</label>
              {"   "}
              <input
                id={key}
                type="radio"
                value={value.label}
                checked={this.state.selectedStockArray[unique] === value.label}
                onChange={(e) => {
                  const { selectedStockArray } = this.state;
                  if (selectedStockArray[unique] === undefined) {
                    selectedStockArray[unique] = value.label;
                  } else selectedStockArray[unique] = value.label;
                  // console.log(selectedStockArray);
                  const [selectedOption] = values.filter(
                    (value) => value.label === e.target.value
                  );
                  console.log(selectedOption);

                  this.setState({
                    selectedStockArray,
                    product: {
                      ...this.state.product,
                      specialPrice: selectedOption.price ? selectedOption.price : this.state.product.specialPrice,
                    },
                  });
                }}
              />
              {"       "}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    } else if (type === "Custom Radio Button") {
    } else if (type === "Multiple Select") {
    } else if (type === "Date") {
    } else if (type === "Date Time") {
    } else if (type === "Time") {
    }
  };
  arrayEquals = (a, b) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  };
  render() {
    console.log(this.state);
    const handleCart = (e) => {
      e.preventDefault();
      // console.log("Button CLicked");
      // if (
      //   this.state.selectedStockArray.length < this.state.product.options.length
      // ) {
      //   window.alert("Please Select all options to add the product");
      // } else {
      //   let stkid = this.state.stock[this.state.selectedStockArray.join("-")][2]
      //     ? this.state.stock[this.state.selectedStockArray.join("-")][2]
      //     : null;
      //   if (this.state.stock[this.state.selectedStockArray.join("-")][1]) {
      //     this.props.addToCart(
      //       this.state.product._id,
      //       this.state.qty,
      //       stkid ? stkid : null
      //     );
      //   } else {
      //     window.alert("Product Out Of S tock");
      //   }
      // }
      let id = "";
      var arr = Array.from(this.state.selectedStockArray);
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          if (arr.length === 0) {
          } else if (arr[i].length === 1) {
            arr[i] = arr[i][0];
          } else arr[i] = arr[i].join("-");
        }
      }
      arr = arr
        .join("-")
        .split("-")
        .sort()
        .filter((ele) => ele !== "");
      //console.log(arr)
      for (var key of Object.keys(this.state.stock)) {
        let temparr = key.split("-").sort();
        if (arr.length < temparr.length) {
          temparr = temparr.slice(0, arr.length);
          if (this.arrayEquals(arr, temparr)) {
            id = this.state.stock[key][2];
          }
        } else if (
          arr.length === temparr.length &&
          this.arrayEquals(arr, temparr)
        ) {
          id = this.state.stock[key][2];
        } else {
          arr = arr.slice(0, temparr.length);
          if (this.arrayEquals(arr, temparr)) {
            id = this.state.stock[key][2];
          }
        }
      }
      if (this.state.inCart.length === 0) {
        if (this.state.product.options.length > 0) {
          this.props.addToCart(this.state.product._id, this.state.qty, id);
        } else {
          this.props.addToCart(this.state.product._id, this.state.qty, null);
        }
      }

      this.setState({ stockId: id });
    };
    return (
      <div className={styles.ProductContentDetails}>
        <div className={styles.CategoryName}>
          {this.state.product.categories
            ? this.state.product.categories.map((category, key) => {
                return <span key={key}>{category.name},</span>;
              })
            : ""}
        </div>
        <div className={styles.ProductName}>
          {this.state.product.name} {this.state.product.shortDescription}
        </div>
        {this.state.product.tags.length > 0 && (
          <div className={styles.ProductTags}>
            Tags :
            {this.state.product.tags
              ? this.state.product.tags.map((tag, key) => (
                  <span>{tag.name},</span>
                ))
              : ""}
          </div>
        )}
        <div>
          <AiFillStar className={styles.Star} />
          <AiFillStar className={styles.Star} />
          <AiFillStar className={styles.Star} />
          <AiOutlineStar className={styles.Star} />
          <AiOutlineStar className={styles.Star} />
          {this.state.product.rating > 0 && (
            <span className={styles.ProductRating}>
              {" "}
              {this.state.product.rating}
            </span>
          )}
        </div>
        <div className={styles.PriceAndDetails}>
          <div className={styles.ProductQuestions}>
            <div className={styles.Mrp}>MRP:</div>
            {this.state.product.specialPrice && (
              <div className={styles.Price}>Our Price:</div>
            )}
            {this.state.product.specialPrice && (
              <div className={styles.Discount}>Discount:</div>
            )}
            {this.state.product.specialPrice && (
              <div className={styles.Saved}>You Save:</div>
            )}
            <div className={styles.Delivery}>Delivery in:</div>

            <div className={styles.Color}>
              {/* {this.state.product.options.map((opt, key) =>
              this.getOption(opt.type, opt.name, opt.required, opt.value, key)
            )} */}
              {/* Color:
            <span id={styles.Color}>
              <Dropdown className={styles.ColorDropdown}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className={styles.ColorDropdownButton}
                >
                  WHITE
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.DropdownMenu}>
                  <div className={styles.DropdownItems}>
                    <Dropdown.Item
                      className={styles.DropDownItem}
                      href="#/COLOR-1"
                    >
                      COLOR 1
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={styles.DropDownItem}
                      href="#/COLOR-2"
                    >
                      COLOR 2
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={styles.DropDownItem}
                      href="#/COLOR-3"
                    >
                      COLOR 3
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={styles.DropDownItem}
                      href="#/COLOR-4"
                    >
                      COLOR 4
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </span> */}
            </div>
            <div className={styles.Qty}>Qty:</div>
            {this.state.product.SKU && (
              <div className={styles.ProductCode}>Product Code:</div>
            )}
          </div>
          <div className={styles.ProductAnswers}>
            {this.state.product.specialPrice && (
              <div id={styles.Mrp}>Rs. {this.state.product.price}</div>
            )}
            <div id={styles.Price}>
              Rs.{" "}
              {this.state.product.specialPrice
                ? this.state.product.specialPrice
                : this.state.product.price}
            </div>
            {this.state.product.specialPrice && (
              <div id={styles.Discount}>
                {Math.round(
                  ((this.state.product.price -
                    this.state.product.specialPrice) *
                    100) /
                    this.state.product.price,
                  1
                )}
                % OFF
              </div>
            )}
            {this.state.product.specialPrice && (
              <div id={styles.Saved}>
                {this.state.product.price - this.state.product.specialPrice}
              </div>
            )}
            <div id={styles.Delivery}>Within 7 working days</div>
            <div id={styles.Qty}>
              <GrFormSubtract
                className={styles.AddSubtract}
                onClick={() => {
                  const { qty } = this.state;
                  this.setState({
                    product: { ...this.state.product },
                    qty: qty - 1 > 1 ? qty - 1 : 1,
                  });
                }}
              />
              {this.state.qty}
              <GrFormAdd
                className={styles.AddSubtract}
                onClick={() => {
                  const { qty } = this.state;
                  this.setState({
                    product: { ...this.state.product },
                    qty: qty + 1,
                  });
                }}
              />
            </div>
            {this.state.product.SKU && (
              <div id={styles.ProductCode}>{this.state.product.SKU}</div>
            )}
          </div>
        </div>
        <div className={styles.ExtraOptions}>
          {this.state.product.options.map((opt, key) =>
            this.getOption(opt.type, opt.name, opt.required, opt.value, key)
          )}
        </div>

        <div className={styles.CartButtons}>
          <Button
            className={styles.BuyNowButton}
            type="submit"
            onClick={handleCart}
          >
            <Link to="/cart"> BUY NOW</Link>
          </Button>
          {this.state.inCart.length === 0 && (
            <Button
              className={styles.AddToCardButton}
              onClick={handleCart}
              type="submit"
            >
              ADD TO CART
            </Button>
          )}

          {this.state.inCart.length !== 0 && (
            <Button className={styles.BuyNowButton}>
              <Link to="/cart"> GO TO CART</Link>
            </Button>
          )}
        </div>

        <div className={styles.ProductText}>
          <div className={styles.ProductDescHead}>PRODUCT DESCRIPTION</div>
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.product.description
                ? this.state.product.description
                : "",
            }}
          ></div>
          {/* <div className={styles.ProductDescHead}>
            STORY BEHIND THIS CATEGORY
          </div>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.productDetails,
  cart: state.cart,
});
export default connect(mapStateToProps, { addToCart })(ProductContentDetails);
