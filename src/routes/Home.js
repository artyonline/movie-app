import React, { Component } from "react";

import Header from "../components/Header";
import Filters from "../components/Filters";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Filters/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    userState: state.userStore
})

export default  compose(withRouter, connect (mapStateToProps, {  }) )(Home);
