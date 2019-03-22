import React from "react";

export default function InnerHTML({ dangerous }) {
  return <p dangerouslySetInnerHTML={{ __html: dangerous }} />;
}
