import React from "react";
import { Dropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

export default function ProfileDropdown({ logout }) {
  return (
    <div>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          <PersonCircle />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/profile" disabled>
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
