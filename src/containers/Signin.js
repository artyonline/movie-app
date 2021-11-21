import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import styles from "./Signup.css";
import { signIn } from "../actions/userAction"
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from 'react-router-dom'

class Signin extends Component {
  state = {
    data: {
      email: null,
      password: null,
    },
  };

  onSubmit = async () => {
    await this.props.signIn(this.state.data);
    if (this.props.userState.isLoggedIn) {
      console.log("dashboard")
      // Redirect to home page.
      this.props.history.push("/")
    }
  }
  render() {
    return (
      <Card className="text-center">
        <Card.Header>Sign Up</Card.Header>
        <div className="centered-div">
          <Card.Body>
            <Form className="form-content">
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
              <InputGroup className="mb-3 button-div">
                <Button
                  className="btnFormSend"
                  variant="outline-success"
                  onClick={this.onSubmit}
                >
                  Login
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

const mapStateToProps = state => ({
  userState: state.userStore
})

export default  compose(withRouter, connect (mapStateToProps, { signIn }) )(Signin);