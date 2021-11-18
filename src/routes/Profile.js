import React from 'react'
import { Breadcrumb } from "react-bootstrap";

import Header from "../components/Header";

export default function Profile() {
    return (
        <div>
        <Header />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        </div>
    )
}
