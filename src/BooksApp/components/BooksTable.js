import React from "react";
import { Button, Table } from "reactstrap";
export default function BooksTable({ bookslist, edit, remove }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookslist.map((book, index) => {
          return (
            <tr key={book.id}>
              <th scope="row">{index + 1}</th>
              <td>{book.title}</td>
              <td>{book.rating}</td>
              <td>
                <Button
                  onClick={() => edit(book)}
                  color="success"
                  size="sm"
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => remove(book.id)}
                  color="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
