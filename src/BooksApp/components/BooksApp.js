import React, { Component } from "react";
import { Button, Modal } from "reactstrap";
import shortid from "shortid";
import booksData from "../booksData";
import BooksModalBody from "./BooksModalBody";
import BooksModalFooter from "./BooksModalFooter";
import BooksModalHeader from "./BooksModalHeader";
import BooksTable from "./BooksTable";

export default class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.updateBook = this.updateBook.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.addBook = this.addBook.bind(this);
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

  addBook(e) {
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
          <BooksModalHeader closeModal={this.closeModal} />
          <BooksModalBody
            handleChange={this.handleChange}
            book={this.state.book}
          />
          <BooksModalFooter
            updateflag={this.state.update}
            update={this.updateBook}
            cancelModal={this.closeModal}
            add={this.addBook}
          />
        </Modal>
      </div>
    );
  }
}
