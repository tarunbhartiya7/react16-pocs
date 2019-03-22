import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className="credit text-muted">
          All images are from{" "}
          <a
            rel="noopener noreferrer"
            href="http://commons.wikimedia.org/wiki/Main_Page"
            target="_blank"
          >
            Wikimedia Commons
          </a>{" "}
          and are in the public domain.
        </p>
      </div>
    </div>
  );
}
