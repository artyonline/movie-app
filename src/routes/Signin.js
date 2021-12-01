import React, { Component } from "react";
import { Card, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import styles from "../styles/unauth.module.css";
import { signIn } from "../actions/userAction";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class Signin extends Component {
  state = {
    data: {
      email: null,
      password: null,
    },
  };

  onSubmit = async () => {
    const addToWishList = this.props.location.state?.addToWishList;
    await this.props.signIn(this.state.data);
    if (this.props.userState.isLoggedIn) {
      this.props.history.push({
        pathname: "/",
        state: { addToWishList: addToWishList },
      });
    }
  };
  render() {
    return (
      <Card className="text-center">
        <Card.Header>Sign Up</Card.Header>
        <div className={styles.centeredDiv}>
          <Card.Body>
            <Form className="form-content">
              <InputGroup className="mb-3">
                <InputGroup.Text className={styles.signInputGroupText}>
                  Email
                </InputGroup.Text>
                <FormControl
                  className={styles.signFormContent}
                  aria-label="Email"
                  placeholder="name@example.com"
                  type="email"
                  value={this.state.data.email}
                  onChange={(e) =>
                    this.setState((prevState) => ({
                      data: {
                        ...prevState.data,
                        email: e.target.value,
                      },
                    }))
                  }
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text className={styles.signInputGroupText}>
                  Password
                </InputGroup.Text>
                <FormControl
                  className={styles.signFormContent}
                  aria-label="password"
                  placeholder="********"
                  type="password"
                  value={this.state.data.password}
                  onChange={(e) =>
                    this.setState((prevState) => ({
                      data: {
                        ...prevState.data,
                        password: e.target.value,
                      },
                    }))
                  }
                />
              </InputGroup>
              <InputGroup className={styles.buttonDiv + " mb-3"}>
                <Button
                  className={styles.buttonDiv}
                  variant="outline-primary"
                  onClick={this.onSubmit}
                >
                  Login
                </Button>
              </InputGroup>
              Doesn't have an account?
              <InputGroup className={styles.buttonDiv + " mb-3"}>
                <Button
                  className={styles.buttonDiv}
                  variant="outline-success"
                  onClick={() => {
                    this.props.history.push({
                      pathname: "/signup",
                    });
                  }}
                >
                  Register Instead
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

const mapStateToProps = (state) => ({
  userState: state.userStore,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { signIn })
)(Signin);
