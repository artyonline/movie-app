import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  Col,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import styles from "./Signup.css";

export default class SignUp extends Component {
  state = {
    data: {
      name: null,
      email: null,
      password: null,
    },
  };

  onSubmit = () => {
    console.log(this.state.data)
  }
  render() {
    return (
      <Card className="text-center">
        <Card.Header>Sign Up</Card.Header>
        <div className="centered-div">
          <Card.Body>
            <Form className="form-content">
              <InputGroup className="mb-3">
                <InputGroup.Text>Full Name</InputGroup.Text>
                <FormControl
                  aria-label="Full Name"
                  placeholder="John Doe"
                  type="text"
                  value={this.state.data.name}
                  onChange={e => this.setState(prevState => ({
                    data: {
                      ...prevState.data,
                      name: e.target.value 
                    }
                  }))}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl
                  aria-label="Email"
                  placeholder="name@example.com"
                  type="email"
                  value={this.state.data.email}
                  onChange={e => this.setState(prevState => ({
                    data: {
                      ...prevState.data,
                      email: e.target.value 
                    }
                  }))}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl
                  aria-label="password"
                  placeholder="********"
                  type="password"
                  value={this.state.data.password}
                  onChange={e => this.setState(prevState => ({
                    data: {
                      ...prevState.data,
                      password: e.target.value 
                    }
                  }))}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Button
                  className="btnFormSend"
                  variant="outline-success"
                  onClick={this.onSubmit}
                >
                  Send Feedback
                </Button>
              </InputGroup>
            </Form>
          </Card.Body>
        </div>
        <Card.Footer className="text-muted">Movie App</Card.Footer>
      </Card>
    );
  }
}
