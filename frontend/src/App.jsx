import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";



function App() {



  return (
    <div className="App">

      <div className="app_outlet">
      <Outlet>
    {/* <Link to={"/gergely_j_szabo"}/> */}
    <Link to={"/etchings"}/>
    <Link to={"/paintings"}/>
    <Link to={"/digital"}/>
    <Link to={"/comics"}/>
  
    </Outlet>
</div>

    <div className="app_sideBar">
      <div className="app_linksContainer">

      <Link to={"/"}>Home</Link>
    <Link to={"/etchings"}>Etchings</Link>
    <Link to={"/paintings"}>Paintings</Link>
    <Link to={"/digital"}>Digital</Link>
    <Link to={"/comics"}>Comics</Link>
    {/* <p>Contact : szgpostalada@gmail.com</p> */}

      </div>
    </div>


    </div>
  );
}

export default App;
