import * as actionTypes from "../Constants/StorefrontConstants";

export const getFooterReducer = (state = { footerData: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_FOOTER_REQUEST:
      return {
        loading: true,
        footerData: {},
      };
    case actionTypes.GET_FOOTER_SUCCESS:
      return {
        loading: false,
        footerData: action.payload,
      };
    case actionTypes.GET_FOOTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductTabsReducer = (state = { productTabs: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_TABS_REQUEST:
      return { loading: true, productTabs: {} };

    case actionTypes.GET_PRODUCT_TABS_SUCCESS:
      return {
        loading: false,
        productTabs: action.payload.Products,
      };

    case actionTypes.GET_PRODUCT_TABS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getFeaturesReducer = (state = { features: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_FEATURES_REQUEST:
      return {
        loading: true,
        features: {},
      };
    case actionTypes.GET_FEATURES_SUCCESS:
      return {
        loading: false,
        features: action.payload,
      };
    case actionTypes.GET_FEATURES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getLogosReducer = (state = { logos: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_LOGO_REQUEST:
      return {
        loading: true,
        logos: {},
      };
    case actionTypes.GET_LOGO_SUCCESS:
      return {
        loading: false,
        logos: action.payload,
      };
    case actionTypes.GET_LOGO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getBannerReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_BANNER_REQUEST:
      return { loading: true, data: {} };
    case actionTypes.GET_BANNER_SUCCESS:
      return { loading: false, data: action.payload.data[0].Banners };
    case actionTypes.GET_BANNER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getMenuReducer = (
  state = { menus: { PrimaryMenu: { menuItems: [] } } },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_MENUS_REQUEST:
      return {
        loading: true,
        menus: [],
      };
    case actionTypes.GET_MENUS_SUCCESS:
      return {
        loading: false,
        menus: action.payload,
      };
    case actionTypes.GET_MENUS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getGeneralReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_GENERAL_REQUEST:
      return {
        loading: true,
        data: {},
      };
    case actionTypes.GET_GENERAL_SUCCESS:
      return {
        loading: false,
        data: action.payload.General,
      };
    case actionTypes.GET_GENERAL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSocialReducer = (state = { links: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_SOCIAL_LINKS_REQUEST:
      return {
        loading: true,
        links: {},
      };
    case actionTypes.GET_SOCIAL_LINKS_SUCCESS:
      return {
        loading: false,
        links: action.payload.SocialLinks,
      };
    case actionTypes.GET_SOCIAL_LINKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
