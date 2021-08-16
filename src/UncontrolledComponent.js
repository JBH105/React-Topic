import React, { Component } from "react";

export default class UncontrolledComponent extends Component {
  constructor() {
    super();
    this.name = React.createRef();
    this.password = React.createRef();
    this.state = {
      name: "",
      password: "",
    };
  }
  useRef(event) {
    event.preventDefault();
    console.warn(this.name.current.value, this.password.current.value);
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <div>
        {/* UncontrolledComponent */}
        <form onSubmit={(event) => {this.useRef(event)}}>
          <h3>uncontrolled component</h3>
          <input type="text" placeholder="user name" ref={this.name} />
          <br />
          <br />
          <input type="password" placeholder="user password" ref={this.password}/>
          <br />
          <br />
          <button type="submit"> submit</button>
        </form>
        <br />

        {/* Controlled Component */}
        <h3>Controlled component</h3>
        <input type="text" placeholder="name" onChange={(e) => {
            this.setState({ name: e.target.value })}}></input>
        <br />
        <br />
        <input type="password" placeholder="password" onChange={(e) => {
            this.setState({ password: e.target.value })}}></input>
        <br />
        <br />
        <button onClick={() => {this.submit()}}>Submit</button>
      </div>
    );
  }
}
