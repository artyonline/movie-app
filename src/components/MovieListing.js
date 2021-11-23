import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function MovieListing({ movie, addRemove }) {
  return (
    <Row className="mb-3" id={movie.id}>
      <Col>
        <img
          style={{ width: "100px" }}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
      </Col>
      <Col>{movie.original_title}</Col>
      <Col>Genre</Col>
      <Col>{movie.vote_average}</Col>
      <Col>{movie.release_date}</Col>
      <Col>
        <Button onClick={() => addRemove(movie.id)}>
          {movie.addedToWishlist ? "Remove" : "Add"}
        </Button>
      </Col>
    </Row>
  );
}
