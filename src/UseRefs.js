import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class UseRefs extends Component {
  constructor() {
    super();
    this.userRef = React.createRef();
  }
  Ref() {
    this.userRef.current.focus();
  }
  render() {
    return (
      <div>
        <p style={{ textAlign: "center", color: "GrayText" }}>User-Refs</p>
        <input ref={this.userRef} type="text" />

        <br />
        <br />
        <button
          style={{ variant: "primary", size: "1g" }}
          onClick={() => {
            this.Ref();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
