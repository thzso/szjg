import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app_outlet">
        <Outlet>
          {/* <Link to={"/gergely_j_szabo"}/> */}
          {/* <Link to={"/etchings"}/>
    <Link to={"/paintings"}/>
    <Link to={"/digital"}/>
    <Link to={"/comics"}/>
    <Link to={"//links&contacts"}/> */}
        </Outlet>
      </div>

      <div className="app_sideBar">
        {/* <div className="app_linksContainer"> */}
          <NavLink className="navLink" to={"/"}>Home</NavLink>
          <NavLink className="navLink" to={"/etchings"}>Etchings</NavLink>
          <NavLink className="navLink" to={"/paintings"}>Paintings</NavLink>
          <NavLink className="navLink" to={"/digital"}>Digital</NavLink>
          <NavLink className="navLink" to={"/comics"}>Comics</NavLink>
          <NavLink className="navLink" to={"/links&contacts"}>Links & Contacts</NavLink>
          {/* <p>Contact : szgpostalada@gmail.com</p> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
