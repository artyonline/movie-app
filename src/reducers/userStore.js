import Cookies from "js-cookie";

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
      Cookies.set("userId", action.data.id);
      return state;
    case "SIGNOUT":
      console.log("SIGNOUT");
      if (action.success) {
        state.isLoggedIn = false;
        state.user = null;
        state.error = null;
      }
      Cookies.remove("userId");
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
