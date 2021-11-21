import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

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
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    userState: state.userStore
})

export default  compose(withRouter, connect (mapStateToProps, {  }) )(Home);
