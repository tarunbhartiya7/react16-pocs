import React, { Component } from "react";

class FormsExample extends Component {
  state = {
    firstName: "",
    lastName: "",
    isFriendly: false,
    gender: "",
    comments: "testing",
    favColor: "blue",
    isFormSubmitted: false
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSubmit = e => {
    // submit form
    e.preventDefault();
    this.setState({
      isFormSubmitted: true
    });
    // reset the form

    // POST request example
    // const post = {
    //     name: 'Mike'
    // }
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(post)
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />

        <br />

        <textarea
          value={this.state.comments}
          name="comments"
          onChange={this.handleChange}
        />

        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>

        {/* Formik */}
        <br />

        <label>Favorite Color:</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="">-- Please Choose an option --</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>

        {this.state.isFormSubmitted && (
          <div>
            <h1>
              {this.state.firstName} {this.state.lastName}
            </h1>
            <h2>You are a {this.state.gender}</h2>
            <h3>{this.state.comments}</h3>
            <h2>Your favorite color is {this.state.favColor}</h2>
          </div>
        )}

        <button>Submit</button>
      </form>
    );
  }
}

export default FormsExample;
