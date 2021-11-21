import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

const initialState = {};

const middleware = [thunk];

//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;