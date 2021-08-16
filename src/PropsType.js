import React, { Component } from "react";
import propType from "prop-types";

export default class PropsType extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.age}</h4>
        <h4>{this.props.name}</h4>

      </div>
    );
  }
}
PropsType.propType = {
    age:propType.number,
    name:propType.string

};


