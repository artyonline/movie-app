const userState = {
  user: {},
  isLoggedIn: false,
  error: null,
};

const userStore = (state = userState, action) => {
  switch (action.type) {
    case "SIGNIN":
      if (action.success) {
        state.isLoggedIn = true;
        state.user = action.data;
        state.error = null;
      }
      console.log(state);
      return state;
    case "SIGNOUT":
      if (action.success) {
        state.isLoggedIn = false;
        state.user = null;
        state.error = null;
      }
      return state;
    case "ERROR":
      state.isLoggedIn = false;
      state.user = null;
      return state;
    default:
      return state;
  }
};

export default userStore;
