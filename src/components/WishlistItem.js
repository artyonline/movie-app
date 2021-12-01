import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

export default function WishlistItem({ movie, removeItem, selectItem }) {
  return (
    <Row className="mb-3" id={movie.id}>
      <Col>
        <Form.Check id={movie.id} onChange={() => selectItem(movie.movieId)} />
      </Col>
      <Col>
        <img
          style={{ width: "100px" }}
          src={`https://image.tmdb.org/t/p/original${movie.url}`}
        />
      </Col>
      <Col>{movie.title}</Col>
      <Col>
        <Button onClick={() => removeItem(movie.id)}>Delete</Button>
      </Col>
    </Row>
  );
}
