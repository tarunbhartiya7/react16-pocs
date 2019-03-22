import React, { Component } from "react";
import { getData } from "../dataService";
import "../main.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default class AuthorQuiz extends Component {
  render() {
    const authors = getData();

    const state = {
      author: authors[0],
      books: authors[0].books
    };

    return (
      <div className="container">
        <Header />
        <Main {...state} />
        <Footer />
      </div>
    );
  }
}
