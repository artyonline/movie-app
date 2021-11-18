import counterReducer from "./counter";
import userReducer from "./isLogged";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})
export default rootReducer;