import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import MovieListing from "./MovieListing";

export default function MovieList(props) {
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

        {props.movies.map((movie) => {
          return (
            <div className="Join">
              <MovieListing
                movie={movie}
                key={movie.id}
                addRemove={props.addRemove}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
}
