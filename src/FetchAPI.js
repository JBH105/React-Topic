import React, { useEffect } from "react";

export default class FetchAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/user").then((res) => {
     res.json().then((result)=>{
        //  console.log(result);
         this.setState({userName:result})
        //  console.log(this.state.userName);
     })
    });
  }
  render() {
    return (
      <div>
        {this.state.userName
          ? this.state.userName.map((item, i) => (  
              <p>
              {i}
              name:{this.state.userName[i].password}
              <br/>
              Email:{this.state.userName[i].name}</p>
            ))
          : null}
      </div>
    );
  }
}
