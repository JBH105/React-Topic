import React, { Component } from "react";

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      password: "",
      nameError: "",
      passwordError: "",
    };
  }

  valid() {
    if (!this.state.Email.includes("@") && this.state.password.length < 5) {
      this.setState({
        nameError: "Invalid Email Id",
        passwordError: "length mast been 5 charecter",
      });
    } else if (!this.state.Email.includes("@")) {
      this.setState({ nameError: "Invalid Name" });
    } else if (this.state.password.length < 5) {
      this.setState({ passwordError: "length mast been 5 charecter" });
    } else {
      return true;
    }
  }
  submit() {
    this.setState({
      nameError: "",
      passwordError: "",
    });
    if (this.valid()) {
      alert("form has been submited");
    }
  }
  render() {
    return (
      <div>
        <h1>Handling</h1>
        Email :
        <input
          type="email"
          name="Email"
          onChange={(e) => {
            this.setState({ Email: e.target.value });
          }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{this.state.nameError}</p>
        <br />
        password :
        <input
          type="password"
          name="password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <p style={{ color: "red", fontSize: "12px" }}>
          {this.state.passwordError}
        </p>
        <br />
        <button onClick={() => this.submit()}> Submit </button>
      </div>
    );
  }
}
