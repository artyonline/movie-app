import counterReducer from "./counter";
import userStore from "./userStore";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    userStore: userStore
})
export default rootReducer;