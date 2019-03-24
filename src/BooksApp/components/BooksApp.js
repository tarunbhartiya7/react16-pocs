import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import shortid from "shortid";
import booksData from "../booksData";
import BooksTable from "./BooksTable";

export default class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.updateBook = this.updateBook.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editBook = this.editBook.bind(this);
    this.removeBookFromList = this.removeBookFromList.bind(this);
  }

  state = {
    modal: false,
    book: {
      title: "",
      rating: ""
    },
    booksList: booksData(),
    update: false
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        book: {
          ...prevState.book,
          [name]: value
        }
      };
    });
  }

  editBook(book) {
    this.setState({
      book: {
        ...book,
        title: book.title,
        rating: book.rating
      },
      update: true
    });
    this.toggle();
  }

  removeBookFromList(id) {
    let index = this.state.booksList.findIndex(item => item.id === id);
    this.setState(prevState => {
      return {
        booksList: [
          ...prevState.booksList.slice(0, index),
          ...prevState.booksList.slice(index + 1)
        ]
      };
    });
  }

  updateBook() {
    let index = this.state.booksList.findIndex(
      book => book.id === this.state.book.id
    );
    this.setState(prevState => {
      return {
        booksList: [
          ...prevState.booksList.slice(0, index),
          prevState.book,
          ...prevState.booksList.slice(index + 1)
        ]
      };
    });
    this.closeModal();
  }

  submitForm(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        booksList: [
          ...prevState.booksList,
          { id: shortid.generate(), ...prevState.book }
        ]
      };
    });
    this.closeModal();
  }

  resetForm() {
    this.setState({
      book: {
        title: "",
        rating: ""
      },
      update: false
    });
  }

  closeModal() {
    this.toggle();
    this.resetForm();
  }

  render() {
    let button;
    if (this.state.update) {
      button = (
        <Button color="primary" onClick={this.updateBook}>
          Update Book
        </Button>
      );
    } else {
      button = (
        <Button color="primary" onClick={this.submitForm}>
          Add Book
        </Button>
      );
    }
    return (
      <div className="container">
        <h1>Books App</h1>
        <Button color="primary" onClick={this.toggle}>
          Add Book
        </Button>
        <br />
        <br />
        <BooksTable
          bookslist={this.state.booksList}
          edit={this.editBook}
          remove={this.removeBookFromList}
        />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add a new book</ModalHeader>
          <ModalBody>
            <form onSubmit={this.submitForm}>
              <FormGroup>
                <Label for="bookTitle">Title</Label>
                <Input
                  value={this.state.book.title}
                  onChange={this.handleChange}
                  type="text"
                  name="title"
                  id="bookTitle"
                />
              </FormGroup>
              <FormGroup>
                <Label for="rating">Rating</Label>
                <Input
                  value={this.state.book.rating}
                  onChange={this.handleChange}
                  type="number"
                  name="rating"
                  id="rating"
                />
              </FormGroup>
            </form>
          </ModalBody>
          <ModalFooter>
            {button}{" "}
            <Button color="secondary" onClick={this.closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
