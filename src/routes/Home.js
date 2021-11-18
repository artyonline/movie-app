import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

import Header from "../components/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
