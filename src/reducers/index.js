import userStore from "./userStore";
import wishlistStore from "./wishlistStore";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userStore: userStore,
  wishlist: wishlistStore,
});
export default rootReducer;
