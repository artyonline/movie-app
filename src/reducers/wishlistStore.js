const wishlistState = {
  wishlist: [],
  success: false,
  error: null,
};

const wishlistStore = (state = wishlistState, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      const wishList = action.data.data;
      return {
        ...state,
        wishlist: wishList,
        error: null,
      };
    case "SET_SUCCESS":
      state.success = action.data;
      state.error = null;
      return state;
    case "ERROR":
      state.success = false;
      state.error = action.data;
      return state;
    default:
      return state;
  }
};

export default wishlistStore;
