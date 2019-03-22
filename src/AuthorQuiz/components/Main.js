import React from "react";
import Book from "./Book";

export default function Main({ author, books }) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <img className="authorimage" src={author.imageUrl} alt="author" />
        </div>
        <div className="col-sm-8">
          {books.map(title => (
            <Book title={title} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
