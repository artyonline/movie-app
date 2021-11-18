import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from "./reducers";
import App from "./App";
import "./index.css";
import Wishlist from "./routes/Wishlist";
import Movie from "./routes/Movie";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import SignIn from "./containers/Signin"
import SignUp from "./containers/Signup"

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movie" element={<Movie/>} />
        <Route path="wishlist" element={<Wishlist/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="signin" element={<SignIn/>} />
        <Route path="signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
