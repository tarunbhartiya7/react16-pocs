import React, { Component } from "react";
import { createStore } from "redux";

export default class ReduxDemo extends Component {
  render() {
    // Step 2: Reducer - state and action
    const reducer = (state, action) => {
      if (action.type === "ATTACK") {
        return action.payload;
      }
      if (action.type === "GREEN-ATTACK") {
        return action.payload;
      }
      return state; // reducer should always return state
    };

    // Step 1: Store - reducer and initial state
    const store = createStore(reducer, "Peace");

    // Step 3: Subscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    });

    // Step 4: Dispatch action
    store.dispatch({ type: "ATTACK", payload: "Iron Man" });
    store.dispatch({ type: "GREEN-ATTACK", payload: "HULK" });

    return <div />;
  }
}
