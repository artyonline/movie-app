import React, { Component } from "react";
import {
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {signUp} from "../actions/userAction"
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import styles from "../styles/unauth.module.css";

class SignUp extends Component {
  state = {
    data: {
      name: null,
      email: null,
      password: null,
    },
  };

  onSubmit = async () => {
    await this.props.signUp(this.state.data);
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
        <div className={styles.centeredDiv}>
          <Card.Body>
            <Form className="form-content">
              <InputGroup className="mb-3">
                <InputGroup.Text className={styles.signInputGroupText}>Full Name</InputGroup.Text>
                <FormControl
                    className={styles.signFormContent}
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
                <InputGroup.Text className={styles.signInputGroupText}>Email</InputGroup.Text>
                <FormControl
                    className={styles.signFormContent}
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
                <InputGroup.Text className={styles.signInputGroupText}>Password</InputGroup.Text>
                <FormControl
                    className={styles.signFormContent}
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
              <InputGroup  className={styles.buttonDiv + " mb-3"}>
                <Button
                  className="btnFormSend"
                  variant="outline-success"
                  onClick={this.onSubmit}
                >
                  Signup
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

export default  compose(withRouter, connect (mapStateToProps, { signUp }) )(SignUp);
