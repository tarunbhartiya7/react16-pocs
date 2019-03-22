import React from "react";

export default function Counter(props) {
  return (
    <div onClick={props.onCounterClick}>
      This div is clicked {props.data} times
    </div>
  );
}
