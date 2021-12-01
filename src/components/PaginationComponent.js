import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationComponent({ pages }) {
  return <Pagination>{pages}</Pagination>;
}
