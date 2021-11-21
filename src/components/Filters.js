import React from "react";
import { InputGroup, FormControl, Button, Form, Row, Col } from 'react-bootstrap';
import styles from '../styles/filters.module.css'
import styles2 from '../styles/unauth.module.css'

export default class Filters extends React.Component {
    render() {
        return (
            <div className={styles2.centeredDiv + " " + styles.searchBarDiv}>
                <InputGroup className={"mb-3 " + styles.searchBar}>
                    <FormControl
                        placeholder="Start Typing to search.."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
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
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Rating</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Year</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Order By</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form>
                </InputGroup>
            </div>
        );
    }

}
