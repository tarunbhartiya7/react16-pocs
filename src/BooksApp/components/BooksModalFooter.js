import React from "react";
import { Button, ModalFooter } from "reactstrap";
export default function BooksModalFooter({
  updateflag,
  update,
  add,
  cancelModal
}) {
  let button;
  if (updateflag) {
    button = (
      <Button color="primary" onClick={update}>
        Update Book
      </Button>
    );
  } else {
    button = (
      <Button color="primary" onClick={e => add(e)}>
        Add Book
      </Button>
    );
  }
  return (
    <ModalFooter>
      {button}{" "}
      <Button color="secondary" onClick={cancelModal}>
        Cancel
      </Button>
    </ModalFooter>
  );
}
