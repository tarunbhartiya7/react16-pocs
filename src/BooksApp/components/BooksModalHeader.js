import React from "react";
import { ModalHeader } from "reactstrap";
export default function BooksModalHeader({ closeModal }) {
  return <ModalHeader toggle={closeModal}>Add a new book</ModalHeader>;
}
