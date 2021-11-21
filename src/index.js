import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import Wishlist from "./routes/Wishlist";
import Movie from "./routes/Movie";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import SignIn from "./containers/Signin";
import SignUp from "./containers/Signup";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/wishlist" exact component={Wishlist} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </div>
      </Router>
  </Provider>,
  document.getElementById("root")
);
