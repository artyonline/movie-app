import userStore from "./userStore";
import wishlistStore from "./wishlistStore";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userStore: userStore,
  wishlistStore: wishlistStore,
});
export default rootReducer;
