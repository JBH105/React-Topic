import React, { useEffect, useState, Suspense, lazy } from "react";
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
import UseModal from "./UseModel";
import memo from "./memo";
import UplodFile from "./UplodFile";
import PropsType from "./PropsType";
import CustomHooks from "./CustomHooks";
// import UncontrolledComponent from "./UncontrolledComponent";
const UncontrolledComponent = lazy(() => import("./UncontrolledComponent"));

function App() {
  // Memo
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(100);
  //Call API
  // const [state, setState] = useState();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/user")
  //     .then((result) => {
  //       setState(result.data);
  //     })
  //     .catch((Err) => {
  //       console.log(Err);
  //     });
  // }, []);
  return (
    <div>
      <Suspense fallback={<div><h4>Working....</h4></div>}>
        Count {count}
        <UseModal />
        {/* Memo */}
        <memo data={data} />
        <button onClick={() => setcount(count + 1)}>Count</button>
        <UncontrolledComponent />
        <UplodFile/>

        <PropsType age={30} name="Jaydeep"/>
        <CustomHooks/>
      </Suspense>
      {/* {state &&
        state.map((data) => {
          return <li style={{ backgroundColor: "whitesmoke" }}>{data.name}</li>;
        })} */}
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
      {/* <UseRefs />
      <UseBootstrap/> */}
    </div>
  );
}

export default App;
