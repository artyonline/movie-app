const wishlistState = {
  wishlist: [],
  success: false,
  error: null,
};

const wishlistStore = (state = wishlistState, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      if (action.success) {
        state.wishlist = action.data;
        state.error = null;
      }
      console.log(state);
      return state;
    case "SET_SUCCESS":
      state.success = action.data;
      state.error = null;
      console.log(state);
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
