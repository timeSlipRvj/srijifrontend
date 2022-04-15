import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsReducer, {
  ProductDetailsReducer,
} from "./Reducers/ProductsReducer";
import UsersReducer from "./Reducers/UsersReducer";
import {
  getFooterReducer,
  getProductTabsReducer,
  getBannerReducer,
  getMenuReducer,
  getLogosReducer,
  getFeaturesReducer,
  getGeneralReducer,
  getSocialReducer,
} from "./Reducers/StoreFrontReducer";
import {
  CategoriesReducer,
  CategoryProductsReducer,
} from "./Reducers/CategoryReducer";
import { PageReducer } from "./Reducers/PageReducer";
import { cartReducer } from "./Reducers/CartReducer";
import { wishlistReducer } from "./Reducers/WishlistReducer";
import {
  getOrderReducer,
  saveOrderReducer,
  sendOrderReducer,
} from "./Reducers/OrderReducer";
import { getBlogsReducer, getSingleBlogReducer } from "./Reducers/BlogReducer";
const reducer = combineReducers({
  products: ProductsReducer,
  footer: getFooterReducer,
  user: UsersReducer,
  productTabs: getProductTabsReducer,
  bannerData: getBannerReducer,
  menus: getMenuReducer,
  categories: CategoriesReducer,
  categoryProducts: CategoryProductsReducer,
  productDetails: ProductDetailsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  logos: getLogosReducer,
  features: getFeaturesReducer,
  general: getGeneralReducer,
  page: PageReducer,
  order: saveOrderReducer,
  blogs: getBlogsReducer,
  socials: getSocialReducer,
  sendOrder: sendOrderReducer,
  getOrder: getOrderReducer,
  singleBlog: getSingleBlogReducer,
});
const middleware = [thunk];
const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
