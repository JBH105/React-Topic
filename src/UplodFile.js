import React, { Component } from "react";

export default class UplodFile extends Component {
  upload(e) {
    console.warn(e.target.files);
  }
  render() {
    return (
      <div>
        <h8>
          <input type="file" name="file" onChange={(e) => this.upload(e)} />
        </h8>
      </div>
    );
  }
}
