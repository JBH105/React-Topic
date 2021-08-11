import React, { useEffect, useState } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Lifecycel from "./Lifecycel";
import Forms from "./Forms";
import MapFile from "./MapFile";
import Style from "./Style";
import FetchAPI from "./FetchAPI";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import UseRefs from "./UseRefs";                   
import UseBootstrap from "./UseBootstrap";

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then((result) => {
        setState(result.data);
      })
      .catch((Err) => {
        console.log(Err);
      });
  }, []);
  return (
    <div>
      {state &&
        state.map((data) => {
          return <li style={{ backgroundColor: "whitesmoke" }}>{data.name}</li>;
        })}
      {/* <Router>
        <Link to="/Forms"> Forms</Link>
        <Link to="/Home"> Home</Link>
        <Link to="/MaulFile"> MapFile</Link>

        <Route exact path="/" component={Forms} />
        <Route path="/Home" component={Home} />
        <Route path="/forms" component={Forms} />
        <Route path="/MapFile" component={MapFile} />
      </Router> */}

      {/* <h3>Component {state}</h3>
      <button onClick={()=>{setstate(state +1)}}>Increment</button>
      <button onClick={()=>{setstate(state -1)}}>Decrement</button>
       */}
      {/* <Home/> */}
      {/* <Profile text={{ name: "Hello Props", data: 'profile' }} /> */}
      {/* <Lifecycel text={{ name: 'Jaydeep' }} /> */}

      {/* <Forms /> */}
      {/* <MapFile /> */}
      {/* <Style /> */}
      {/* <FetchAPI /> */}
      <UseRefs />
      <UseBootstrap/>
    </div>
  );
}

export default App;
