import React from "react";
import { InputGroup, FormControl, Button, Form, Row, Col } from 'react-bootstrap';
import styles from '../styles/filters.module.css'
import styles2 from '../styles/unauth.module.css'

export default class Filters extends React.Component {

    state = {
        data: {
            searchParam: null,
            genre: null,
            rating: null,
            year: null,
            sort: null
        },
    };
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState)
    }

    render() {
        return (
            <div className={styles2.centeredDiv + " " + styles.searchBarDiv}>
                <InputGroup className={"mb-3 " + styles.searchBar}>
                    <FormControl
                        placeholder="Start Typing to search.."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={this.state.data.searchParam}
                        onChange={e => this.setState(prevState => ({
                            data: {
                                ...prevState.data,
                                searchParam: e.target.value
                            }
                        }))}
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form className={"mb-3 " + styles.dropDownFilterRow}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Genre</Form.Label>
                                <Form.Select
                                    defaultValue="Choose..."
                                    value={this.state.data.genre}
                                    onChange={e => this.setState(prevState => ({
                                    data: {
                                        ...prevState.data,
                                        genre: e.target.value
                                    }
                                    }))}
                                >
                                    <option value="clear">...</option>
                                    <option value="test">Test</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Rating</Form.Label>
                                <Form.Select
                                    defaultValue="..."
                                    value={this.state.data.rating}
                                    onChange={e => this.setState(prevState => ({
                                        data: {
                                            ...prevState.data,
                                            rating: e.target.value
                                        }
                                    }))}
                                >
                                    <option value="clear">...</option>
                                    <option value="test">Test</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Year</Form.Label>
                                <Form.Select
                                    defaultValue="..."
                                    value={this.state.data.year}
                                    onChange={e => this.setState(prevState => ({
                                        data: {
                                            ...prevState.data,
                                            year: e.target.value
                                        }
                                    }))}
                                >
                                    <option value="clear">...</option>
                                    <option value="test">Test</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Order By</Form.Label>
                                <Form.Select
                                    defaultValue="..."
                                    value={this.state.data.sort}
                                    onChange={e => this.setState(prevState => ({
                                        data: {
                                            ...prevState.data,
                                            sort: e.target.value
                                        }
                                    }))}
                                >
                                    <option value="clear">...</option>
                                    <option value="test">Test</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form>
                </InputGroup>
            </div>
        );
    }

}
