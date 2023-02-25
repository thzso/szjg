import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

import styles from "./Layout2.module.css";

const Layout2 = ({windowWidth}) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className={open ? styles.menuClose : styles.menuOpen} onClick={() => setOpen(!open)}>
        {open? <CancelIcon sx={{fontSize: "34px"}}/>: <MenuIcon sx={{fontSize: "34px"}}/>}
        
      </div>
      {open && 
      
      <Sidebar/>
      }
      <div className="app_outlet">
        <Outlet context={{windowWidth: windowWidth}}></Outlet>
      </div>
    </>
  );
};

export default Layout2;
