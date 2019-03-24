import React from "react";
import { FormGroup, Input, Label, ModalBody } from "reactstrap";

export default function BooksModalBody({ handleChange, book }) {
  return (
    <ModalBody>
      <form>
        <FormGroup>
          <Label for="bookTitle">Title</Label>
          <Input
            value={book.title}
            onChange={handleChange}
            type="text"
            name="title"
            id="bookTitle"
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            value={book.rating}
            onChange={handleChange}
            type="number"
            name="rating"
            id="rating"
          />
        </FormGroup>
      </form>
    </ModalBody>
  );
}
