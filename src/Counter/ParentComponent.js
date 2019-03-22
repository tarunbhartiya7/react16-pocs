import React, { Component } from "react";
import Counter from "./Counter";

export default class ParentComponent extends Component {
  state = {
    clicks: 1
  };

  clickHandler = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };
  render() {
    console.log("render fired", this.state.clicks);
    return (
      <div>
        <Counter data={this.state.clicks} onCounterClick={this.clickHandler} />
      </div>
    );
  }
}
