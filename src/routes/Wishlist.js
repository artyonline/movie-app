import React from 'react'
import { Breadcrumb } from "react-bootstrap";

import Header from "../components/Header";

export default function Wishlist() {
    return (
        <div>
        <Header />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Wish List</Breadcrumb.Item>
        </Breadcrumb>
        </div>
    )
}
