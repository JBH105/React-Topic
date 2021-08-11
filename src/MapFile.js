import React, { Component } from "react";

export default class MapFile extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "jaydeep", email: "jaydeep@test.in" },
        { name: "meet", email: "abc@test.in" },
        { name: "parth", email: "parth@test.in" },
        { name: "Jay", email: "jay@test.in" },
        { number: "9714024078", email: "jay@test.in" },

      ],
    };
  }
  render() {
    return (
      <div>
        <h3>
          {this.state.list.map((item) => (
            <div>
              Name:<span>{item.name}</span>
              <br />
              Email:<span>{item.email}</span>
              <br />
              <br />
              Number:<span>{item.number}</span>
            </div>
          ))}
        </h3>
      </div>
    );
  }
}
