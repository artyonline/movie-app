import React from "react";
import { Row, Col, Container } from 'react-bootstrap';


export default function MovieList() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>Image</Col>
                    <Col>Title</Col>
                    <Col>Genre</Col>
                    <Col>Rating</Col>
                    <Col>Year</Col>
                    <Col>Action</Col>
                </Row>
            </Container>
        </div>
    );
}
